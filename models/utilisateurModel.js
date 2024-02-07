const mongoose = require('mongoose')
const { Schema } = mongoose;

const utilisateurSchema = new Schema({
 nom: {
  type: String,
 },
 prenom: {
  type: String,
 },
 telephone: {
  type: String,
 },
 photo: {
  type: String,
 },
 compte_id : {
    type: Schema.ObjectId, ref: 'Compte'},
});

const utilisateurModel = mongoose.model('Utilisateur', utilisateurSchema);

// Export the model
module.exports = utilisateurModel;

