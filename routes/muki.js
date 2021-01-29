const express = require('express');
const router = express.Router();

let guilds = [
  {
    name: "Guild de Ejemplo",
    icon: "https://www.trecebits.com/wp-content/uploads/2020/12/Que-es-Discord.jpg",
    members: 69,
    channels: 420,
    owner: {
      tag: "Example#0000",
      avatar: "https://i2.wp.com/cdn.getapk.app/imgs/a/b/8/ab88671aa7e80b755c75ce6416b370ae_icon.png"
    }
  },
  {
    name: "Guild de Ejemplo",
    icon: "https://www.trecebits.com/wp-content/uploads/2020/12/Que-es-Discord.jpg",
    members: 69,
    channels: 420,
    owner: {
      tag: "Example#0000",
      avatar: "https://i2.wp.com/cdn.getapk.app/imgs/a/b/8/ab88671aa7e80b755c75ce6416b370ae_icon.png"
    }
  },
  {
    name: "Guild de Ejemplo",
    icon: "https://www.trecebits.com/wp-content/uploads/2020/12/Que-es-Discord.jpg",
    members: 69,
    channels: 420,
    owner: {
      tag: "Example#0000",
      avatar: "https://i2.wp.com/cdn.getapk.app/imgs/a/b/8/ab88671aa7e80b755c75ce6416b370ae_icon.png"
    }
  },
  {
    name: "Guild de Ejemplo",
    icon: "https://www.trecebits.com/wp-content/uploads/2020/12/Que-es-Discord.jpg",
    members: 69,
    channels: 420,
    owner: {
      tag: "Example#0000",
      avatar: "https://i2.wp.com/cdn.getapk.app/imgs/a/b/8/ab88671aa7e80b755c75ce6416b370ae_icon.png"
    }
  },
  {
    name: "Guild de Ejemplo",
    icon: "https://www.trecebits.com/wp-content/uploads/2020/12/Que-es-Discord.jpg",
    members: 69,
    channels: 420,
    owner: {
      tag: "Example#0000",
      avatar: "https://i2.wp.com/cdn.getapk.app/imgs/a/b/8/ab88671aa7e80b755c75ce6416b370ae_icon.png"
    }
  },
  {
    name: "Guild de Ejemplo",
    icon: "https://www.trecebits.com/wp-content/uploads/2020/12/Que-es-Discord.jpg",
    members: 69,
    channels: 420,
    owner: {
      tag: "Example#0000",
      avatar: "https://i2.wp.com/cdn.getapk.app/imgs/a/b/8/ab88671aa7e80b755c75ce6416b370ae_icon.png"
    }
  },
  {
    name: "Guild de Ejemplo",
    icon: "https://www.trecebits.com/wp-content/uploads/2020/12/Que-es-Discord.jpg",
    members: 69,
    channels: 420,
    owner: {
      tag: "Example#0000",
      avatar: "https://i2.wp.com/cdn.getapk.app/imgs/a/b/8/ab88671aa7e80b755c75ce6416b370ae_icon.png"
    }
  },
  {
    name: "Guild de Ejemplo",
    icon: "https://www.trecebits.com/wp-content/uploads/2020/12/Que-es-Discord.jpg",
    members: 69,
    channels: 420,
    owner: {
      tag: "Example#0000",
      avatar: "https://i2.wp.com/cdn.getapk.app/imgs/a/b/8/ab88671aa7e80b755c75ce6416b370ae_icon.png"
    }
  },
  {
    name: "Guild de Ejemplo",
    icon: "https://www.trecebits.com/wp-content/uploads/2020/12/Que-es-Discord.jpg",
    members: 69,
    channels: 420,
    owner: {
      tag: "Example#0000",
      avatar: "https://i2.wp.com/cdn.getapk.app/imgs/a/b/8/ab88671aa7e80b755c75ce6416b370ae_icon.png"
    }
  },
  {
    name: "Guild de Ejemplo",
    icon: "https://www.trecebits.com/wp-content/uploads/2020/12/Que-es-Discord.jpg",
    members: 69,
    channels: 420,
    owner: {
      tag: "Example#0000",
      avatar: "https://i2.wp.com/cdn.getapk.app/imgs/a/b/8/ab88671aa7e80b755c75ce6416b370ae_icon.png"
    }
  },
  {
    name: "Guild de Ejemplo",
    icon: "https://www.trecebits.com/wp-content/uploads/2020/12/Que-es-Discord.jpg",
    members: 69,
    channels: 420,
    owner: {
      tag: "Example#0000",
      avatar: "https://i2.wp.com/cdn.getapk.app/imgs/a/b/8/ab88671aa7e80b755c75ce6416b370ae_icon.png"
    }
  },
]; // Guild predeterminada


// En traspaso exitoso
const onSucessMessage = {
  message: "La información fué recibida exitosamente.",
  status: 200,
};

/* Información de Muki. */
router.post('/update', (req, res, next) => {

  if (req.headers['content-type'] === "application/json") {
    try {
      guilds = req.body.guilds;
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
    guilds: guilds
  });


});

module.exports = router;
