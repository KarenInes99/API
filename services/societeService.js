const societeModel = require('../models/societeModel');

const index = async ()=>{

  try {
    const data = await societeModel.find();
    return data;
  } catch (error) {
    return error;
  }

}

const find = async (id)=>{

  try {
    const data = await societeModel.findById(id);
    return data;
  } catch (error) {
    return error;
  }

}


const store = async (body)=>{

  try {

    const societeSchema = new societeModel(body);
    await societeSchema.save();
    return societeSchema;
  } catch (error) {
    return error;
  }

}

const update = async (id, body)=>{

  try {
    await utilisateurModel.findByIdAndUpdate(id, body);
    return true;
  } catch (error) {
    return error;
  }

}

const destroy = async (id)=>{

  try {
    await utilisateurModel.findByIdAndDelete(id);
    return true
  } catch (error) {
    return error;
  }

}

module.exports= {index, find, store, update, destroy}