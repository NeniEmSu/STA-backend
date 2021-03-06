const userQuery = require('../queries/baseTestQuery');

// GET ALL USERS
exports.getUsers = async (req, res, next) => {
  try {
    const users = await userQuery.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

// GET USER BY ID
exports.getUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await userQuery.findById(userId);
    if (user.length === 0) {
      res.status(400);
      const error = new Error('The user with the specified id does not exist');
      next(error);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    next(err);
  }
};

// INSERT USER INTO DB
exports.addUser = async (req, res, next) => {
  const newUser = req.body;
  if (!newUser.name) {
    res.status(400);
    const error = new Error('Please provide the name');
    next(error);
  } else {
    try {
      const user = await userQuery.addUser(newUser);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }
};

exports.updateUser = async (req, res, next) => {
  const userId = req.params.id;
  const newChanges = req.body;
  if (!newChanges.name) {
    res.status(400);
    const error = new Error('You are missing information');
    next(error);
  } else {
    try {
      const addChanges = await userQuery.updateUser(userId, newChanges);
      res.status(200).json(addChanges);
    } catch (err) {
      next(err);
    }
  }
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const deleting = await userQuery.removeUser(userId);
    res.status(204).json(deleting);
  } catch (err) {
    next(err);
  }
};
