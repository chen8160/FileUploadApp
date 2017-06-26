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
});
const path = require('path');

app.get('/', (req, res) => {
    res.send('Root');
});

app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    res.json(req.files);
});

app.get('/get/:filename', (req, res) => {
    console.log();
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    res.sendFile(path.join(__dirname, 'uploads/') + req.params.filename);
});


app.listen(8000);