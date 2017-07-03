const express = require('express');
const app = express();
const multer = require('multer');
const mime = require('mime');
const mongoose = require('mongoose');
const config = require('./config/database');
const Image = require('./models/image');

var storage = multer.diskStorage({
    destination: './upload',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() +
            '.' + mime.extension(file.mimetype))
    }
});

const upload = multer({
    storage: storage
}).single('file');
const path = require('path');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
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


app.get('/', (req, res) => {
    res.send('Root');
});

app.post('/upload', (req, res) => {

    console.log(req.file);

    upload(req, res, function (err) {
        console.log(req.file.filename);

        if (err) {
            res.json({
                error_code: 1,
                err_desc: err
            });
            return;
        }

        let newImage = new Image({
            filename: req.file.filename,
            // url: 'http://localhost:8080/get/' + req.file.filename
            url: 'get/' + req.file.filename
        });

        Image.addImage(newImage, (err, image) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Failed to upload image'
                });
            } else {
                res.json({
                    success: true,
                    msg: 'Image uploaded',
                    error_code: 0,
                    err_desc: null
                });
            }
        });
    });
});

app.get('/get/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, 'upload/') + req.params.filename);
});

app.get('/getAllimgs', (req, res) => {
    let images = Image.getAllimgs((err, images) => {
        if (err) throw err;
        res.json(images);
    });
});


app.listen(process.env.PORT || 8080);