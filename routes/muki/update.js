const express = require('express');
const router = express.Router();

let latestInformation = {};


// En traspaso exitoso
const onSucessMessage = {
  message: "La información fué recibida exitosamente.",
  status: 200,
  timestamp: Date.now()
};

/* Información de Muki. */
router.post('/update', (req, res, next) => {

  // RECORDAR: El request se parsea automáticamente a JSON.
  try {
    latestInformation = req.body;
    res.send(onSucessMessage);

  } catch (e) {
    res.send({
      message: "Ocurrió un error al recibir la información.",
      status: 500
    })
  }
});

router.get('/update', (req, res, next) => {

  res.send({
    message: "Este endpoint solo acepta POST requests.",
    status: 401
  });

});


router.get('/get', (req, res, next) => {

  res.send({
    status: 200,
    data: latestInformation
  });
});

module.exports = router;
