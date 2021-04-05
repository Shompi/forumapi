const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// Cors
const cors = require('cors');
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/muki', require('./api/muki'));
app.use('/exiliados', require('./api/exiliados'));

app.get('/home*', (req, res) => {
	res.redirect("home.html");
});

app.get('/mayero', (req, res, next) => {
	res.redirect("html5_final.html");
});

app.get('*', (req, res) => {
	res.redirect("notfound.html");
})


// error handler en caso de que falle el parseado a json (entity.parse.failed)
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
