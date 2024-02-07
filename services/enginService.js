const enginModel = require('../models/enginModel');

const index = async ()=>{

  try {
    const data = await enginModel.find();
    return data;
  } catch (error) {
    return error;
  }

}

const find = async (id)=>{

  try {
    const data = await enginModel.findById(id);
    return data;
  } catch (error) {
    return error;
  }

}

const store = async (body)=>{

  try {

    const enginSchema = new enginModel(body);
    await enginSchema.save();
    return enginSchema;
  } catch (error) {
    return error;
  }

}

const update = async (id, body)=>{

  try {
    await enginModel.findByIdAndUpdate(id, body);
    return true;
  } catch (error) {
    return error;
  }

}

const destroy = async (id)=>{

  try {
    await enginModel.findByIdAndDelete(id);
    return true
  } catch (error) {
    return error;
  }

}

module.exports= {index, find, store, update, destroy}