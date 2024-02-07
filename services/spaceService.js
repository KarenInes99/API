const spaceModel = require('../models/spaceModel');

const index = async ()=>{

  try {
    const data = await spaceModel.find();
    return data;
  } catch (error) {
    return error;
  }

}

const find = async (id)=>{

  try {
    const data = await spaceModel.findById(id);
    return data;
  } catch (error) {
    return error;
  }

}


const store = async (body)=>{

  try {

    const spaceSchema = new spaceModel(body);
    await spaceSchema.save();
    return spaceSchema;
  } catch (error) {
    return error;
  }

}

const update = async (id, body)=>{

  try {
    await spaceModel.findByIdAndUpdate(id, body);
    return true;
  } catch (error) {
    return error;
  }

}

const destroy = async (id)=>{

  try {
    await spaceModel.findByIdAndDelete(id);
    return true
  } catch (error) {
    return error;
  }

}

module.exports= {index, find, store, update, destroy}