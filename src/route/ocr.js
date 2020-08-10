var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = (app) => {
    const ocrs = require('../controller/ocr.js');

    app.post('/api/ocr', upload.single('image'), ocrs.scan);

}