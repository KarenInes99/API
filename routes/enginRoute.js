var express = require('express');
var router = express.Router();
const enginController = require('../controllers/enginController')

/* GET home page. */
router.get('/', enginController.index);

router.get('/:id', enginController.find);

router.post('/', enginController.store);

router.put('/:id', enginController.update);

router.delete('/:id', enginController.destroy);

module.exports = router;
 