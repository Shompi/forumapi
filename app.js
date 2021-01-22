const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


// routers
const indexRouter = require('./routes/index');
const botinfoRouter = require('./routes/muki/update');


// view engine setup
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());




app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/muki', botinfoRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  if (err.type === "entity.parse.failed") {
    console.log("Se recibió un request con un json que no pudo ser parseado.");
    console.log(req.body);
    res.send({ message: "Ocurrió un error al parsear el JSON.", status: 400 });
  }
});

module.exports = app;
