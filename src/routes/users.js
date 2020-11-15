const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/userCtrl');

const auth = require('../middleware/auth');
// const grantAccess = require('../middleware/grantAccess');
const authValidation = require('../middleware/authValidation');

router.get(
  '/user',
  auth,
  // grantAccess('readOwn', 'profile'),
  userCtrl.getSingleUser
);

router.get(
  '/users',
  // auth, grantAccess('readAny', 'profile'),
  userCtrl.getUsers
);

router.post('/signup', authValidation.validationMiddleware, userCtrl.signup);

router.post('/login', authValidation.validationMiddleware, userCtrl.login);

router.post('/logout', userCtrl.logout);

router.put(
  '/users/update/:userId',
  auth,
  // grantAccess('updateAny', 'profile'),
  userCtrl.updateUser
);

router.delete(
  '/users/delete/:userId',
  auth,
  // grantAccess('deleteAny', 'profile'),
  userCtrl.deleteUser
);

module.exports = router;
