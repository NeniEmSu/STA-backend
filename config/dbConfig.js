const knex = require('knex');
const knexConfig = require('../knexfile');

let environment = 'development';

if (process.env.NODE_ENV === 'production') environment = 'production';
else if (process.env.NODE_ENV === 'testing') environment = 'testing';
else environment = 'development';

module.exports = knex(knexConfig[environment]);
