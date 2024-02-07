const mongoose = require('mongoose')
const { Schema } = mongoose;

const enginSchema = new Schema({
  libelle: { 
    type: String,
  },
  photo: { 
    type: String,
  },
  detail: { 
    type: String,
  },
  utilisateur_id: { 
    type: Schema.ObjectId, ref: 'Utilisateur'},
  type_id: { 
    type: Schema.ObjectId, ref: 'Type'},

});

const enginModel = mongoose.model('Engin', enginSchema);

// Export the model
module.exports = enginModel;

