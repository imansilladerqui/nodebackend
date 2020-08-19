const seed = require('../Components/seed/network');
const clients = require('../Components/clients/network');
const policies = require('../Components/policies/network');
const authenticate = require('../Components/authenticate/network');
const {verifyBoth, verifyAdmin} = require('./middleware');

const Routes = ((server)=>{
    server.use('/api/authenticate', authenticate);
    server.use('/api/seed', seed);
    server.use('/api/clients', verifyBoth, clients);
    server.use('/api/policies', verifyAdmin, policies);
});

module.exports = Routes;