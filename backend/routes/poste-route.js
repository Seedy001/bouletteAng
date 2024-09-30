const express = require('express');
const { getposte} = require('../handlers/posteHandle');
const router = express.Router();

router.get("/poste", async (req, res) => {
  try {
    const postes = await getposte();
    res.send(postes);
  } catch (error) {
    console.error('Erreur lors de la récupération du poste:', error);
    res.status(500).send({ message: 'Erreur lors de la récupération du poste' });
  }
});

module.exports = router
