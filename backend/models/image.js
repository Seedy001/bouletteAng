const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    itemImageSrc: { type: String, required: true },
    thumbnailImageSrc: { type: String, required: true },
    alt: { type: String, required: true },
    title: { type: String, required: true }
});

const Image = mongoose.model('images', imageSchema);

module.exports = Image;
