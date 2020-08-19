const express = require('express');
const Router = express.Router();
const serverResponse = require('../../Network/response');
const controller = require('./controller')

Router.post('/', (req, res) => {
        controller.getMocks()
        .then(() => {
            serverResponse.success(req, res, 'succesfully created', 200);
        })
        .catch(err => {
            serverResponse.error(req, res, 'Internal error', 500, err);
        });
//     let clients = axios.axiosInstance.get("/5808862710000087232b75ac")
//         .then((response)=>{
//             return response.data.clients;
//         })
//         .catch((error)=>{
//             return error;
//         })
        
//     let policies = axios.axiosInstance.get("/5808862710000087232b75ac")
//         .then((response)=>{
//             return response.data.clients;
//         })
//         .catch((error)=>{
//             return error;
//         })
//     return serverResponse.success(req, res, 'data imported to DB', 200); 
});
  
module.exports = Router;