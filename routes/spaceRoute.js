var express = require('express');
var router = express.Router();
const spaceController = require('../controllers/spaceController')

/* GET home page. */
router.get('/', spaceController.index);

router.get('/:id', spaceController.find);

router.post('/', spaceController.store);

router.put('/:id', spaceController.update);

router.delete('/:id', spaceController.destroy);

module.exports = router;
 