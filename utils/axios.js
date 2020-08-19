const axios = require('axios');


// const prodUrl = '';
// const devUrl = '';

exports.axiosInstance = axios.create({
  baseURL: "http://www.mocky.io/v2",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})