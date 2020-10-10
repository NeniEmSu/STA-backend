function isValidProduct(product) {
  const returnObj = {
    passed: false,
    error_message: '',
  };
  if (typeof product.title !== 'string' || product.title.trim() === '') {
    returnObj.error_message = 'invalid product title';
    return returnObj;
  }
  if (isNaN(product.price) || product.price < 1) {
    returnObj.error_message = 'invalid product price';
    return returnObj;
  }
  if (!Number.isInteger(product.quantity)) {
    returnObj.error_message = 'invalid product quantity';
    return returnObj;
  }
  returnObj.passed = true;
  return returnObj;
}

module.exports = async (req, res, next) => {
  const validationCheck = isValidProduct(req.body);
  if (validationCheck.passed === true) {
    next();
  } else {
    const error = new Error(validationCheck.error_message);
    next(error);
  }
};
