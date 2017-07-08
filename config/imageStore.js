const multer = require('multer');
const mime = require('mime');

var storage = multer.diskStorage({
    destination: './upload',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() +
            '.' + mime.extension(file.mimetype))
    }
});

module.exports = multer({
    storage: storage
}).single('file');