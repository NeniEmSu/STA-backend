/* eslint-disable camelcase */
const bcrypt = require('bcrypt');

const saltRounds = 10;
const jwt = require('jsonwebtoken');
const User = require('../queries/usersQuery');

const UserModel = require('../models/usersModel');

const signToken = (userId) => {
  return jwt.sign(
    {
      iss: process.env.BASE_URL,
      userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '24h',
    }
  );
};

exports.signup = async (req, res, next) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
    const { username, email } = req.body;
    const user = {
      username,
      email,
      password: hashedPassword,
      role_id: '2',
    };
    const newUserId = await User.signUp(user);
    const token = signToken(newUserId);
    res.status(201).json({
      message: 'User registration successful!',
      id: newUserId,
      token,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { username, email, title_id, country_id, university_id, address_id } = req.body;
    const user = {
      username,
      email,
      title_id,
      country_id,
      university_id,
      address_id,
    };
    await User.update(userId, user);
    res.status(201).json({
      message: 'User updated successful!',
    });
  } catch (error) {
    next(error);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.query()
      .select('uuid', 'email', 'username', 'created_at', 'updated_at')
      .where('deleted_at', null);

    res.status(200).json({
      users,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  User.getByEmail(email)
    .then((user) => {
      if (!user) {
        const error = {
          status: 403,
          message: 'User email not found, correct it or consider signing up',
        };
        next(error);
      }
      bcrypt
        .compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            const error = {
              status: 403,
              message: 'Incorrect credentials!',
            };
            next(error);
          }
          const token = signToken(user.uuid);
          res.status(200).json({
            message: 'Logged in successfully!',
            userId: user.uuid,
            token,
          });
        })
        .catch((error) => {
          next(error);
        });
    })
    .catch((error) => {
      next(error);
    });
};

exports.getSingleUser = async (req, res, next) => {
  try {
    const { userId } = res.locals;
    console.log(userId);

    const { user } = res.locals;
    if (!user) {
      const error = {
        status: 403,
        message: 'User not found',
      };
      next(error);
    }
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

exports.logout = (req, res, next) => {
  try {
    res.status(200).json({ message: 'Logged Out Successfully!' });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const result = await User.delete(id);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};
