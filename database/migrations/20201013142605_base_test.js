/* eslint-disable no-unused-vars */

/**
 * @param {import('knex')} knex
 */
const tableName = 'test';
const { onUpdateTrigger } = require('../../knexfile');

exports.up = async function (knex, promise) {
  await knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string('name');
    table.timestamps(true, true);
  });

  await knex.raw(onUpdateTrigger(tableName));
};

exports.down = function (knex, promise) {
  return knex.schema.dropTableIfExists(tableName);
};
