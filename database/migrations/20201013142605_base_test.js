/* eslint-disable no-unused-vars */
const tableNames = require('../../src/constants/tableName');
/**
 * @param {import('knex')} knex
 */
const { onUpdateTrigger } = require('../../knexfile');

exports.up = async function (knex, promise) {
  await knex.schema.createTable(tableNames.test, (table) => {
    table.increments();
    table.string('name');
    table.timestamps(true, true);
  });

  await knex.raw(onUpdateTrigger(tableNames.test));
};

exports.down = function (knex, promise) {
  return knex.schema.dropTableIfExists(tableNames.test);
};
