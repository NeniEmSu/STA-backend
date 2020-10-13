const Joi = require('@hapi/joi');

const setError = {
  status: 400,
  message: '',
};

module.exports = {
  validationMiddleware(req, res, next) {
    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30),

      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ['com', 'net'] },
        })
        .required(),

      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),

      repeat_password: Joi.ref('password'),
    });
    const { error } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          setError.message = `The Username provided failed to match the following rules:
            <br>
            1. It must contain ONLY characters that are either a letters or numbers.
            <br>
            2. Should not contain special characters.
            <br>
            3. It must be at least 3 characters in length and not greater than 30 characters in length.
          `;
          next(setError);
          break;
        case 'email':
          setError.message = `You must provide a valid email address with the following requirements:
            <br>
            1. It must contain ONLY characters that are either a letters or numbers.
            <br>
            2. Should match example@domain.extension.
            <br>
            3. Allowed extensions are ".com" and ".net".
          `;
          next(setError);
          break;
        case 'password':
          setError.message = `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics.
              <br>
              2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `;
          next(setError);
          break;
        case 'repeat_password':
          setError.message = `The repeated password does not match the password.`;
          next(setError);
          break;
        default:
          setError.message = 'Invalid registration information!';
          next(setError);
      }
    } else {
      next();
    }
  },
};
