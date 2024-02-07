const enginService = require('../services/enginService')

const index = async (req, res)=>{

  try {
    const data = await enginService.index();
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const find = async (req, res)=>{

  try {

    const data = await enginService.find(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const store = async (req, res)=>{

  try {

    const data = await enginService.store(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const update = async (req, res)=>{

  try {
    const data = await enginService.update(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const destroy = async (req, res)=>{

  try {
    const data = await enginService.destroy(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

module.exports= {index, find, store, update, destroy}