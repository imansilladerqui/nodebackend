// const auth = require('./Components/auth/strategies');
const bodyParser = require('body-parser');
const express = require('express');
// const path = require('path');
// const passport = require('passport');
const router = require('./Network/routes');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const html = path.resolve('client', 'build', 'index.html');
// const session = require('express-session');
const {config} = require('./config/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);  

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}!`);
});