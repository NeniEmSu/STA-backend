const router = require('express').Router();

const usersCtrl = require('../controllers/baseTestController');

router.get('/', usersCtrl.getUsers);

router.get('/:id', usersCtrl.getUser);

router.post('/', usersCtrl.addUser);

router.put('/:id', usersCtrl.updateUser);

router.delete('/:id', usersCtrl.deleteUser);

module.exports = router;
