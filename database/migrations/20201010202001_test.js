/* eslint-disable no-unused-vars */

const tableName = 'test';
const { onUpdateTrigger } = require('../../knexfile');

exports.up = async function (knex, promise) {
  await knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string('name');
    table.timestamps(false, true);
  });

  await knex.raw(onUpdateTrigger(tableName));
};

exports.down = function (knex, promise) {
  return knex.schema.dropTableIfExists(tableName);
};
