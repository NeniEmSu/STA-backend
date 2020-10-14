const tableNames = require('../../src/constants/tableName');
const roles = require('../../src/constants/roles');

// convert roles object to array
const rolesValues = Object.values(roles);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableNames.role)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.role).insert(
        rolesValues.map((role) => {
          return { name: role };
        })
      );
    });
};
