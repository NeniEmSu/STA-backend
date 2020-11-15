const express = require('express');

const router = express.Router();

const validateId = require('../middleware/validateId');

const stateCtrl = require('../controllers/stateCtrl');

router.get('/:id', validateId, stateCtrl.getState);

router.get('/', stateCtrl.getStates);

module.exports = router;
