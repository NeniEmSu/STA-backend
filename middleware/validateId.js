module.exports = async (req, res, next) => {
  const { id } = req.params;
  if (!Number.isNaN(id)) {
    next();
  } else {
    const error = new Error('Invalid id');
    next(error);
  }
};
