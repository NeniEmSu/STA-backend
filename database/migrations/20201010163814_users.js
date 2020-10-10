/* eslint-disable no-unused-vars */

const tableName = 'users';
const { onUpdateTrigger } = require('../../knexfile');

exports.up = async function (knex, promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');

  await knex.schema.createTable(tableName, (table) => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('username').notNullable();
    table.string('email').notNullable();
    table.string('password');
    table.string('picture');
    table.string('description');
    table.string('first_name');
    table.string('last_name');
    table.string('country');
    table.string('nationality');
    table.integer('tel').unsigned();
    table.timestamps(false, true);
  });

  await knex.raw(onUpdateTrigger(tableName));
};

exports.down = async function (knex, promise) {
  await knex.schema.dropTableIfExists(tableName);

  await knex.raw('drop extension if exists "uuid-ossp"');
};
