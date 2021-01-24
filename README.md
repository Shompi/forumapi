# API Foro Exiliados

## - Especificaciones
- La API usa el puerto `4000`
- Recordar: Si la api recibe un post request con los siguientes headers: `Accepts: application/json` y `Content-Type: application/json`, el `body` del request será **automáticamente parseado a json al momento de entrar a tu router**, en caso de que los headers anteriores estén presentes en el request pero el cuerpo no pueda ser parseado correctamente, la API enviará un error al cliente.
## - Instalar dependencias
`npm install` dentro de la carpeta del proyecto

## - Agregar nuevas rutas
Crea un archivo `*.js` dentro de la carpeta `routes`, dentro de él escribes los get o post handlers que necesites. Luego en `app.js` debes agregar tu ruta de la siguiente manera:

`const tuRouter = require('./routes/tuRouter.js');`

Luego lo agregas a las rutas que maneja la api

`app.use('/', tuRouter);`

O si quieres una ruta que está bajo una subcarpeta/subruta

`app.use('/tuRuta', tuRouter);`

Finalmente, tuRouter.js deberia estar construido de la siguiente manera:

```js
// 
const {Router} = require('express');
//  Instanciamos nuestro router
const router = Router();

// Handler de los get requests
router.get('/get', (req, res, next) => {

  // Enviamos una respuesta al cliente
  res.send("Hola!");
});

// Para entrar a la ruta de arriba desde el navegador, debes ir a
// http://localhost:4000/get o http://localhost:4000/turuta/get
```