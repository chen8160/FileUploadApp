const express = require('express');
const app = express();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: './upload',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({
    storage: storage
}).single('file');
const path = require('path');

//create a cors middleware
app.use(function (req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});


app.get('/', (req, res) => {
    res.send('Root');
});

app.post('/upload', (req, res) => {

    upload(req, res, function (err) {
        console.log(req.file);
        if (err) {
            res.json({
                error_code: 1,
                err_desc: err
            });
            return;
        }
        res.json({
            error_code: 0,
            err_desc: null
        });
    });
});

app.get('/get/:filename', (req, res) => {
    console.log();
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    res.sendFile(path.join(__dirname, 'uploads/') + req.params.filename);
});


app.listen(8000);