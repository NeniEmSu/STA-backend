const jwt = require('jsonwebtoken');
const User = require('../queries/usersQuery');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.getOne(decodedToken.userId);
    if (!user) {
      const error = {
        status: 401,
        message: 'Invalid user credentials',
      };
      next(error);
    }
    res.locals._userId = decodedToken.userId;
    res.locals._userName = user.userName;
    next();
  } catch (error) {
    next(error);
  }
};
