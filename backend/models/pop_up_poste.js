const mongoose = require('mongoose');

const popupSchema = new mongoose.Schema({

    description: { type: String, required: true },
    lien:{type:String,required:true}


  },
  { timestamps: true }
);

const Popup = mongoose.model('popups', popupSchema);
module.exports = Popup
