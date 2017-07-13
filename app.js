const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const users = require('./routes/users');
const files = require('./routes/files');
const passport = require('passport');
const bodyParser = require('body-parser');

var compression = require('compression');

app.use(compression());

// Connect To Database
mongoose.connect(config.database[process.env.NODE_ENV || "dev"]);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database[process.env.NODE_ENV || "dev"]);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

//create a cors middleware
app.use(function (req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.static('./public'));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use('/files', files);

app.get('/', (req, res) => {
    res.send('Root');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(process.env.PORT || 8080);