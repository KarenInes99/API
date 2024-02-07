var express = require('express');
var router = express.Router();
const societeController = require('../controllers/societeController')

/* GET home page. */
router.get('/', societeController.index);

router.get('/:id', societeController.find);

router.post('/', societeController.store);

router.put('/:id', societeController.update);

router.delete('/:id', societeController.destroy);

module.exports = router;
 