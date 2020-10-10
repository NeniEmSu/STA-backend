const tableName = 'users';
const { onUpdateTrigger } = require('../../knexfile');

exports.up = async function (knex) {
  await knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string('name');
    table.timestamps(false, true);
  });

  await knex.raw(onUpdateTrigger(tableName));
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(tableName);
};
