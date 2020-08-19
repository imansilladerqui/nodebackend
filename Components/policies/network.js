const express = require('express');
const Router = express.Router();
const serverResponse = require('../../Network/response');
const controller = require('./controller')

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