const express = require('express');
const Router = express.Router();
const serverResponse = require('../../Network/response');
const controller = require('./controller')

/**
 * @swagger
 * /api/policies:
 *  get:
 *      tags:
 *        - "Policies"
 *      description: Get policies
 *      parameters:
 *       - in: path
 *         name: name
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
    controller.getPolicies(req.query)
    .then(data => {
        totalItems = data.length
        serverResponse.success(req, res, data, 200, totalItems);
    })
    .catch(err => {
        serverResponse.error(req, res, 'Internal error', 500, err);
    });
});


/**
 * @swagger
 * /api/policies/id:
 *  get:
 *      tags:
 *        - "Policies"
 *      description: Get policies by policie number
 *      parameters:
 *       - in: path
 *         name: id
 *         required: false
 *      responses:
 *          200:
 *              description: Success
 *          401:
 *              description: Bad credentials
 *      security:
 *          - bearerAuth: []
 */

Router.get('/:id', (req, res) => {
    controller.getUserByPolicyNumber(req.params)
    .then(data => {
        serverResponse.success(req, res, data, 200);
    })
    .catch(err => {
        serverResponse.error(req, res, 'Internal error', 500, err);
    });
});
  
module.exports = Router;