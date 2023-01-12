const Jimp = require('jimp');

const imageManipulation = (image) => {

    Jimp.read(`${image}`, (err, img) => {
        if (err) throw err;
        img
          .resize(250, 250)
          .write(`${image}`)
    });
}

module.exports = imageManipulation