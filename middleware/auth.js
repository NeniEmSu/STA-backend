const jwt = require('jsonwebtoken');
const User = require('../queries/usersQuery');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decodedToken.userId });
    if (!user) {
      const error = 'Invalid user credentials';
      next(error);
      // return res.status(400).json({ type: 'error', error:  });
    }
    res.locals._userId = decodedToken.userId;
    res.locals._userName = user.userName;
    next();
  } catch (error) {
    next(error);
    // res.status(401).json({
    //   type: 'error',
    //   error: 'Unauthorized request!',
    //   message: 'All requests to route are protected, Sign up or In to gain access!',
    // });
  }
};
