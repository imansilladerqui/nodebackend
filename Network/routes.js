const path =  require('path');
const seed = require('../Components/seed/network');
const clients = require('../Components/clients/network');
const policies = require('../Components/policies/network');
const authenticate = require('../Components/authenticate/network');
const {verifyBoth, verifyAdmin} = require('./middleware');
const swaggerJsDocs = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerDocs = swaggerJsDocs({
    swaggerDefinition: {
        info: {
            title: "BrastelWark API",
            description: "An application used to filter data from the habitants of Brastlewark",
            servers: "http://localhost:3000"
        },
        securityDefinitions: {
            bearerAuth: {
              type: 'apiKey',
              name: 'access-token',
              scheme: 'bearer',
              in: 'header',
            },
        },
    },
    apis: [path.resolve(__dirname, '../Components/**/network.js'), path.resolve(__dirname, '/*.yaml')],
});

const Routes = ((server)=>{
    server.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
    server.use('/api/authenticate', authenticate);
    server.use('/api/seed', seed);
    server.use('/api/clients', verifyBoth, clients);
    server.use('/api/policies', verifyAdmin, policies);
});

module.exports = Routes;