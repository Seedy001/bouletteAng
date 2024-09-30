const Poste = require("../models/poste")


async function getposte() {
  const postes = await Poste.find();
  return postes.map(poste => poste.toObject());
}

module.exports={getposte};
