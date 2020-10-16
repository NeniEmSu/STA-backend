const tableNames = require('../../src/constants/tableName');
const {
  addDefaultColumns,
  createNameTable,
  createNameCodeTable,
  references,
} = require('../../src/lib/tableUtils');
const { onUpdateTrigger } = require('../../knexfile');

/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await Promise.all([
    createNameTable(knex, tableNames.question_type),
    createNameTable(knex, tableNames.subject),
    createNameTable(knex, tableNames.title),
    createNameTable(knex, tableNames.role),
    createNameCodeTable(knex, tableNames.university),
    createNameCodeTable(knex, tableNames.country),
    createNameCodeTable(knex, tableNames.state),
  ]);

  await knex.schema.table(tableNames.state, (table) => {
    references(table, tableNames.country);
  });

  await knex.schema.createTable(tableNames.address, (table) => {
    table.increments().notNullable();
    table.string('street_address_1', 50).notNullable();
    table.string('street_address_2', 50);
    table.string('city', 50).notNullable();
    table.string('zipcode', 15).notNullable();
    references(table, 'state', false);
    references(table, 'country');
    addDefaultColumns(table);
    table.unique([
      'street_address_1',
      'street_address_2',
      'city',
      'zipcode',
      'country_id',
      'state_id',
    ]);
  });

  await Promise.all(
    [
      tableNames.university,
      tableNames.address,
      tableNames.question_type,
      tableNames.country,
      tableNames.state,
      tableNames.subject,
      tableNames.title,
      tableNames.role,
    ].map((tableName) => knex.raw(onUpdateTrigger(tableName)))
  );
};

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.university,
      tableNames.address,
      tableNames.question_type,
      tableNames.state,
      tableNames.subject,
      tableNames.title,
      tableNames.role,
    ].map((tableName) => knex.schema.dropTableIfExists(tableName))
  );
  // drop table country separately because other objects depend on it
  await knex.schema.dropTableIfExists(tableNames.country);
};
