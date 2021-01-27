const { Router } = require('express');
const router = Router();

let payload = {};
const success = { status: 200, message: "Los memes fueron recibidos con éxito!" };


router.get('/memes', (req, res, next) => {
  if (req.headers.accept == "application/json") {
    res.send(payload);
  } else {
    res.send(JSON.stringify(payload));
  }

});

router.post('/memes', (req, res, next) => {

  try {

    payload = req.body;
    res.send(JSON.stringify(success));

  } catch (e) {
    res.send(JSON.stringify(success));
  }

});

module.exports = router;
