const tableNames = require('../../src/constants/tableName');

const names = ['Bob', 'Roenz', 'Joe'];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableNames.test)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.test).insert(
        names.map((name) => {
          return { name: name };
        })
      );
    });
};
