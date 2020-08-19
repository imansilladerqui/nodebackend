const express = require('express');
const Router = express.Router();
const serverResponse = require('../../Network/response');
const controller = require('./controller')

Router.get('/', (req, res) => {
    controller.getClient(req.query)
    .then(data => {
        serverResponse.success(req, res, data, 200);
    })
    .catch(err => {
        serverResponse.error(req, res, 'Internal error', 500, err);
    });
});
  
module.exports = Router;