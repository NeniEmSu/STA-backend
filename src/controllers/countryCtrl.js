const countryQuery = require('../queries/countriesQuery');

// GET ALL COUNTRIES
exports.getCountries = async (req, res, next) => {
  try {
    const countries = await countryQuery.getAll();
    res.status(200).json(countries);
  } catch (err) {
    next(err);
  }
};

// GET COUNTRY BY ID
exports.getCountry = async (req, res, next) => {
  const countryId = req.params.id;
  try {
    const country = await countryQuery.getById(countryId);
    if (!country) {
      res.status(404);
      const error = new Error('The country with the specified id does not exist');
      next(error);
    } else {
      res.status(200).json(country);
    }
  } catch (err) {
    next(err);
  }
};
