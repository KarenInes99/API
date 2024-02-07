const typeService = require('../services/typeService')

const index = async (req, res)=>{

  try {
    const data = await typeService.index();
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const find = async (req, res)=>{

  try {

    const data = await typeService.find(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const store = async (req, res)=>{

  try {

    const data = await typeService.store(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const update = async (req, res)=>{

  try {
    const data = await typeService.update(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const destroy = async (req, res)=>{

  try {
    const data = await typeService.destroy(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

module.exports= {index, find, store, update, destroy}