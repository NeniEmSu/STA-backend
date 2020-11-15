const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

const auth = require('../middleware/auth');
// const grantAccess = require('../middleware/grantAccess');
const authValidation = require('../middleware/authValidation');

router.get(
  '/user',
  auth,
  // grantAccess('readOwn', 'profile'),
  userController.getSingleUser
);

router.get(
  '/users',
  // auth, grantAccess('readAny', 'profile'),
  userController.getUsers
);

router.post('/signup', authValidation.validationMiddleware, userController.signup);

router.post('/login', authValidation.validationMiddleware, userController.login);

router.post('/logout', userController.logout);

router.put(
  '/users/update/:userId',
  auth,
  // grantAccess('updateAny', 'profile'),
  userController.updateUser
);

router.delete(
  '/users/delete/:userId',
  auth,
  // grantAccess('deleteAny', 'profile'),
  userController.deleteUser
);

module.exports = router;
