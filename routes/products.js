const express = require('express');

const router = express.Router();

const productsCtrl = require('../controllers/productsController');
const validateBody = require('../middleware/validateBody');
const validateId = require('../middleware/validateId');

router.get('/', productsCtrl.getProducts);

router.get('/:id', validateId, productsCtrl.getSingeProduct);

router.post('/', validateBody, productsCtrl.addProduct);

router.put('/:id', validateId, validateBody, productsCtrl.updateProduct);

router.delete('/:id', validateId, productsCtrl.deleteProduct);

module.exports = router;
