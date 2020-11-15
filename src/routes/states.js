const express = require('express');

const router = express.Router();

const stateCtrl = require('../controllers/stateCtrl');

router.get('/:id', stateCtrl.getState);

router.get('/', stateCtrl.getStates);

module.exports = router;
