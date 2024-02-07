var express = require('express');
var router = express.Router();
const utilisateurController = require('../controllers/typeController')

/* GET home page. */
router.get('/', utilisateurController.index);

router.get('/:id', utilisateurController.find);

router.post('/', utilisateurController.store);

router.put('/:id', utilisateurController.update);

router.delete('/:id', utilisateurController.destroy);

module.exports = router;
 