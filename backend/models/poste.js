const mongoose = require('mongoose');

const posteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    sous_title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description_popup: { type: String, required: true },
    lien:{type:String,required:true}

  },
  { timestamps: true }
);

const Poste = mongoose.model('postes', posteSchema);
module.exports = Poste
