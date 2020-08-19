const MongoLib = require('../../lib/mongo');
var _ = require('lodash');
const jwt = require('jsonwebtoken');
const {config} = require('../../config');

const collection = 'clients';

const authenticateClient = async (email) => {
    let mongoDB = new MongoLib();
    const client = await mongoDB.get(collection, email);
    if(!_.isEmpty(client)) {
        const token = jwt.sign({client}, config.token, { expiresIn: 3600 });
       return token;
    }
}

module.exports = {
    authenticateClient,
}