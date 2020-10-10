const router = require('express').Router();

const usersCtrl = require('../controllers/baseTestController');

router.get('/test/', usersCtrl.getUsers);

router.get('/test/:id', usersCtrl.getUser);

router.post('/test/', usersCtrl.addUser);

router.put('/test/:id', usersCtrl.updateUser);

router.delete('/test/:id', usersCtrl.deleteUser);

module.exports = router;
