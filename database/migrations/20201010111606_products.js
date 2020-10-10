const tableName = 'product';
const { onUpdateTrigger } = require('../../knexfile');

exports.up = async function (knex) {
  await knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('image');
    table.string('description');
    table.decimal('price').notNullable();
    table.integer('quantity').unsigned().notNullable();
    table.timestamps(false, true);
  });

  await knex.raw(onUpdateTrigger(tableName));
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(tableName);
};
