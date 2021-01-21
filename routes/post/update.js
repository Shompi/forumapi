const express = require('express');
const router = express.Router();

let latestInformation = {};

// Respuestas del punto
// En traspaso exitoso
const onSucessMessage = {
  message: "La información fué recibida exitosamente.",
  status: 200,
  timestamp: Date.now()
};

// En traspaso fallido
const onFailMessage = {
  message: "Hubo un error al recibir la información.",
  status: 502 // Error del lado del servidor.
};

// Si no se provee una apikey
const onApiKeyMissing = {
  message: "Debes tener una apikey para poder utilizar este endpoint.",
  status: 401 // Necesita autenticación.
}

// Error al parsear el objeto JSON
const onJSONParseError = {
  message: "Ocurrió un error al intentar parsear el objeto JSON, asegurate de enviar el objeto como string y con el correcto formato.",
  status: 400 // Bad request.
}


/* Información de Muki. */
router.post('/', (req, res, next) => {

  // RECORDAR: El request se parsea automáticamente a JSON.
  console.log("Recibido un post request.");
  console.log(req.body);
  const request = req.body;
  if (request.token) {
    latestInformation = request;
    res.send(onSucessMessage);
  } else {
    res.send(onApiKeyMissing);
  }

});

router.get('/', (req, res, next) => {

  res.send({
    status: 200,
    information: latestInformation
  });
});

module.exports = router;
