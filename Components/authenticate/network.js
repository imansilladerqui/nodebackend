const express = require('express');
const Router = express.Router();
const controller = require('./controller')

/**
 * @swagger
 * /api/authenticate:
 *  post:
 *      tags:
 *        - "Authenticate"
 *      description: Get token
 *      parameters:
 *       - in: path
 *         name: Email
 *         required: true
 *      responses:
 *          200:
 *              description: Logging success
 *          401:
 *              description: Bad credentials
 *          403:
 *              description: The user is not able to login
*/

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