var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        let imagen = '';
        if (novedades.img_id) {
            imagen = cloudinary.url(novedades.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
        }

        return {
            ...novedades,
            imagen
        };
    });

    res.json(novedades);
});

router.post('http://localhost:3000/api/contacto', async (req, res) => {
    const email = {
        to: "dgfernandezrubio@gmail.com",
        subject: "Contacto web",
        html: `${req.body.nombre} se contactó a través de la web y quiere más información a este correo: ${req.body.email} 
        Su teléfono es: ${req.body.telefono} el lugar de la obra es:${req.body.lugar}<br> Además hizo el siguiente comentario: ${req.body.mensaje} <br>`
    };

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(email);

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;
