const jwt = require('jsonwebtoken');
const User = require('../queries/usersQuery');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      const error = {
        status: 401,
        message: 'Authorization token not found',
      };
      next(error);
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.getById(decodedToken.userId);
    if (!user) {
      const error = {
        status: 401,
        message: 'Invalid user credentials',
      };
      next(error);
    }
    res.locals.userId = decodedToken.userId;
    res.locals.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
