var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = (app) => {
    const ocrs = require('../controller/ocr.js');

    /**
     * @swagger
     * /api/ocr:
     *  post:
     *      tags: 
     *          - OCR
     *      description: OCR recognize
     *      consumes:
     *          - multipart/form-data
     *      parameters:
     *          - in: formData
     *            name: image
     *            type: file
     *      responses:
     *          200:
     *              description: Ok
     */
    app.post('/api/ocr', upload.single('image'), ocrs.scan);

}