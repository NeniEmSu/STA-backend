const knex = require('knex');
const knexConfig = require('../knexfile');

let db = null;
let environment = null;

if (process.env.NODE_ENV === 'production') {
  environment = 'production';
  db = knex(knexConfig[environment]);
} else if (process.env.NODE_ENV === 'development') {
  environment = 'development';
  db = knex(knexConfig[environment]);
} else {
  environment = 'testing';
  db = knex(knexConfig[environment]);
}

module.exports = db;
