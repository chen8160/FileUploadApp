const express = require('express');
const router = express.Router();
const Image = require('../models/image');
var upload = require('../config/imageStore');
const path = require('path');

router.post('/upload', (req, res) => {

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

router.get('/get/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, '../upload/') + req.params.filename);
});

router.get('/getAllimgs', (req, res) => {
    let images = Image.getAllimgs((err, images) => {
        if (err) throw err;
        res.json(images);
    });
});

module.exports = router;