module.exports = async (req, res, next) => {
  const id = Number(req.params.id);
  if (!Number.isNaN(id)) {
    next();
  } else {
    res.status(400);
    const error = new Error('Invalid id');
    next(error);
  }
};
