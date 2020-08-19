const MongoLib = require('../../lib/mongo');

const collection = 'clients'

const getClient = async (query) => {
    let mongoDB = new MongoLib();
    const clients = await mongoDB.getAll(collection, query);
    return clients || [];
}


module.exports = {
    getClient
}