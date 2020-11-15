const stateQuery = require('../queries/statesQuery');

// GET ALL STATES
exports.getStates = async (req, res, next) => {
  try {
    const states = await stateQuery.getAll();
    res.status(200).json(states);
  } catch (err) {
    next(err);
  }
};

// GET STATE BY ID
exports.getState = async (req, res, next) => {
  const stateId = req.params.id;
  try {
    const state = await stateQuery.getById(stateId);
    if (!state) {
      res.status(404);
      const error = new Error('The state with the specified id does not exist');
      next(error);
    } else {
      res.status(200).json(state);
    }
  } catch (err) {
    next(err);
  }
};
