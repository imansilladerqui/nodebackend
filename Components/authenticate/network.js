const express = require('express');
const Router = express.Router();
const controller = require('./controller')

Router.post('/', async (req, res) => {
    const email = req.body;
    controller.authenticateClient(email)
    .then(data => {
        res.json({
            mensaje: 'Autenticación correcta',
            token: data
        })
    })
    .catch(err => {
        res.json({ mensaje: "Usuario incorrecto"})
    });
});
  
module.exports = Router;