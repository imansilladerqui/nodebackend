const MongoLib = require('../../lib/mongo');

const collection = 'policies';

const getPolicies = async (query) => {
    let mongoDB = new MongoLib();
    const client = await mongoDB.get('clients', query);
    const policies = await mongoDB.getAll(collection, {"clientId": client.id});
    return policies || [];
}

const getUserByPolicyNumber = async (id) => {
    let mongoDB = new MongoLib();
    const policy = await mongoDB.getAll(collection, id);
    const client = await mongoDB.get('clients', {"id": policy[0].clientId});

    return client || [];
}

module.exports = {
    getPolicies,
    getUserByPolicyNumber
}