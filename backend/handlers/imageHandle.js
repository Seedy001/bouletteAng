const Image = require("../models/image")


async function getimage() {
    const images = await Image.find();
    return images.map(image => image.toObject()); 
}

module.exports={getimage};