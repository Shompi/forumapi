const express = require('express');
const router = express.Router();

let guilds = null;


// En traspaso exitoso
const onSucessMessage = {
  message: "La información fué recibida exitosamente.",
  status: 200,
};

/* Información de Muki. */
router.post('/update', (req, res, next) => {

  if (req.headers['content-type'] === "application/json") {
    try {
      guilds = req.body;
      res.send(onSucessMessage);

    } catch (e) {
      console.log(e);

      res.send({
        message: "Ocurrió un error al recibir la información.",
        status: 500
      });
    }
  } else {
    res.send({ message: "Debes enviar el request con el header Content-Type: application/json", status: 400 }); // Bad request.
  }

});

router.get('/guilds', (req, res, next) => {

  res.send({
    status: 200,
    guilds: guilds?.guilds
  });


});

module.exports = router;
