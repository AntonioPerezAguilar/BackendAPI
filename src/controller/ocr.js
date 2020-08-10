const tesseract = require("node-tesseract-ocr")
var fs = require('fs')
var filename = 'images/pic.png'

const config = {
    lang: "eng",
    oem: 1,
    psm: 6,
}

exports.scan = async (req, res) => {
    var readStream = await fs.createReadStream(req.file.path);
    var writeStream = await fs.createWriteStream(filename);
    readStream.pipe(writeStream, (err) => {
        console.log('error')
    });
    return await tesseract.recognize('images/pic.png', config)
    .then(text => {
        res.status(200).json(text);
    })
    .catch(error => {
        console.log('ERROR');
        res.status(500).send(error);
    })
}