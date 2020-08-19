const express = require('express');
const verifyBoth = express.Router();
const verifyAdmin = express.Router();
const jwt = require('jsonwebtoken');
const {config} = require('../config');

verifyBoth.use((req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['access-token'];
    if (token) {
      jwt.verify(token, config.token, (err, decoded) => {   
        if (err) {
            console.log(err)
          return res.json({ mensaje: 'Token inválida' });    
        } else {
            if (decoded.role === 'admin' || 'user') {
                next();
            } else {
                res.send({ 
                    mensaje: 'Necesitas ser usuario o Admin' 
                });
            }
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });

 verifyAdmin.use((req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['access-token'];
    if (token) {
      jwt.verify(token, config.token, (err, decoded) => {   
        if (err) {
            console.log(err)
          return res.json({ mensaje: 'Token inválida' });    
        } else {
            if (decoded.client.role === 'admin') {
                next();
            } else {
                res.send({ 
                    mensaje: 'Necesitas ser Admin' 
                });
            }
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });

 module.exports = {verifyBoth, verifyAdmin};