const { Router } = require('express');
const router = Router();

// Ruta base de la API, administra todos los métodos http (GET, POST, UPDATE, PATCH, etc)
router.all('/', (req, res, next) => {

  // Si el request acepta un JSON devuelta
  if (req.headers.accept == "application/json") {
    res.send({ message: "Hello!", status: 200 });

  } else {
    // Si no mandamos una respuesta solo con texto.
    res.send("Hello there!");
  }
});

module.exports = router;