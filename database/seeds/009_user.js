const tableNames = require('../../src/constants/tableName');
require('dotenv').config();

const users = [
  {
    username: 'admin',
    email: 'admin@gmail.com',
    role_id: '1',
    password: process.env.TEST_PWD,
    hashedPassword: process.env.HASHED_PWD,
  },
];

/**
 * @param {import('knex')} knex
 */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableNames.user)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.user).insert(
        users.map((user) => {
          return {
            username: user.username,
            email: user.email,
            password: user.hashedPassword,
            role_id: user.role_id,
          };
        })
      );
    });
};
