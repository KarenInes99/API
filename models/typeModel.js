const mongoose = require('mongoose')
const { Schema } = mongoose;

const typeModelSchema = new Schema({
  libelle: {
    type: String,
  } 

});

const typeModel = mongoose.model('typeModel', typeModelSchema);

module.exports = typeModel;