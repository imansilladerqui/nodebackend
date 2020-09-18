const bodyParser = require('body-parser');
const express = require('express');
const router = require('./Network/routes');
const {config} = require('./config/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);  

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}!`);
});