const societeService = require('../services/societeService')

const index = async (req, res)=>{

  try {
    const data = await societeService.index();
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const find = async (req, res)=>{

  try {

    const data = await societeService.find(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const store = async (req, res)=>{

  try {

    const data = await societeService.store(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const update = async (req, res)=>{

  try {
    const data = await societeService.update(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const destroy = async (req, res)=>{

  try {
    const data = await societeService.destroy(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

module.exports= {index, find, store, update, destroy}