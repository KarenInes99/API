var express = require('express');
var router = express.Router();
const typeController = require('../controllers/typeController')

/* GET home page. */
router.get('/', typeController.index);

router.get('/:id', typeController.find);

router.post('/', typeController.store);

router.put('/:id', typeController.update);

router.delete('/:id', typeController.destroy);

module.exports = router;
 