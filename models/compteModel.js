const mongoose = require('mongoose')
const { Schema } = mongoose;

const compteSchema = new Schema({
  libelle: {
    type: String,
  },
});

const compteModel = mongoose.model('Compte', compteSchema);

module.exports = compteModel;