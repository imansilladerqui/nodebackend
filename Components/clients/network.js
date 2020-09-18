const express = require('express');
const Router = express.Router();
const serverResponse = require('../../Network/response');
const controller = require('./controller')

/**
 * @swagger
 * /api/clients:
 *  get:
 *      tags:
 *        - "Client"
 *      description: Get client's information by id
 *      parameters:
 *       - in: path
 *         name: Id
 *         required: false
 *      responses:
 *          200:
 *              description: Success
 *          401:
 *              description: Bad credentials
 *      security:
 *          - bearerAuth: []
 */

Router.get('/', (req, res) => {
    console.log(req, res)
    controller.getClient(req.query)
    .then(data => {
        serverResponse.success(req, res, data, 200);
    })
    .catch(err => {
        serverResponse.error(req, res, 'Internal error', 500, err);
    });
});
  
module.exports = Router;