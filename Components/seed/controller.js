const axios = require('../../utils/axios');
const MongoLib = require('../../lib/mongo');

const getMocks = async () => {
    let mongoDB = new MongoLib();
    await axios.axiosInstance.get("/5808862710000087232b75ac")
        .then((response)=>{
            response.data.clients.map(async(client)=> {
                await mongoDB.create('clients', client);
                return;
            });
        })
        .catch((error)=>{
            return error;
        })
        
    await axios.axiosInstance.get("580891a4100000e8242b75c5")
        .then((response)=>{
            return response.data.policies.map(async(policy)=> {
                await mongoDB.create('policies', policy);
                return;
            });
        })
        .catch((error)=>{
            return error;
        })

    return;
}

module.exports = {
    getMocks,
}