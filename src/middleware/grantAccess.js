const { roles } = require('../roles');

module.exports = (action, resource) => {
  return async (req, res, next) => {
    try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
        res.status(401);
        const error = { message: "You don't have the permission to perform this action" };
        next(error);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};
