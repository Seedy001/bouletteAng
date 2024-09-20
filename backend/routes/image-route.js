const express = require('express');
const { getimage } = require('../handlers/imageHandle');
const router = express.Router();

router.get("/images", async (req, res) => {
    try {
        const images = await getimage();
        res.send(images);
    } catch (error) {
        console.error('Erreur lors de la récupération des images:', error);
        res.status(500).send({ message: 'Erreur lors de la récupération des images' });
    }
});

module.exports = router