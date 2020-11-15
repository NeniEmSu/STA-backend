const express = require('express');

const router = express.Router();

const validateId = require('../middleware/validateId');

const stateCtrl = require('../controllers/CountryCtrl');

router.get('/:id', validateId, stateCtrl.getCountry);

router.get('/', stateCtrl.getCountries);

module.exports = router;
