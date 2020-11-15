const stateQuery = require('../queries/statesQuery');

// GET ALL USERS
exports.getStates = async (req, res, next) => {
  try {
    const states = await stateQuery.getAll();
    res.status(200).json(states);
  } catch (err) {
    next(err);
  }
};

// GET USER BY ID
exports.getState = async (req, res, next) => {
  const stateId = req.params.id;
  try {
    const state = await stateQuery.getById(stateId);
    if (!state) {
      res.status(400);
      const error = new Error('The state with the specified id does not exist');
      next(error);
    } else {
      res.status(200).json(state);
    }
  } catch (err) {
    next(err);
  }
};
