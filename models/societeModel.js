const mongoose = require('mongoose')
const { Schema } = mongoose;

const societeSchema = new Schema({
  nom : {
    type : string,
  },
  adresse : {
    type : string,
  },
  photo : {
    type : string,
  },
  telephone : {
    type: string,
  },
  email : {
    type: string,
  }
});

const societeModel = mongoose.model('Societe', societeSchema);

// Export the model
module.exports = societeModel;

