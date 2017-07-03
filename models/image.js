const mongoose = require('mongoose');
const config = require('../config/database');

const ImageSchema = mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const Image = module.exports = mongoose.model('Image', ImageSchema);

module.exports.addImage = function (newImage, cb) {
    newImage.save(cb);
}

module.exports.getAllimgs = function (cb) {
    Image.find().select('url').exec((err, images) => {
        cb(err, images);
    });
}