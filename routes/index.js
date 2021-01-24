var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  if (req.headers.accept == "application/json") {
    res.send({ message: "Hello!", status: 200 });

  } else {
    res.send("Hello there!");
  }

});

router.post('/', (req, res, next) => {

});

module.exports = router;
