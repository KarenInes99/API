const mongoose = require('mongoose')
const { Schema } = mongoose;

const spaceSchema = new Schema({
   libelle : {
      type: String,
   },
   photo : {
      type: String,
   },
   localisation : {
      type: String,
   },
   societe_id : {
      type: Schema.ObjectId, ref: 'Societe'},
});

const utilisateurModel = mongoose.model('Space', spaceSchema);

// Export the model
module.exports = utilisateurModel;

