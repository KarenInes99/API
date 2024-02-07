var express = require('express');
var router = express.Router();
const compteController = require('../controllers/compteController')

/* GET home page. */
router.get('/', compteController.index);

router.get('/:id', compteController.find);

router.post('/', compteController.store);

router.put('/:id', compteController.update);

router.delete('/:id', compteController.destroy);

module.exports = router;
 