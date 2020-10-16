/* eslint-disable no-unused-vars */
const tableNames = require('../../src/constants/tableName');
const { addDefaultColumns, email, references } = require('../../src/lib/tableUtils');

const { onUpdateTrigger } = require('../../knexfile');

/**
 * @param {import('knex')} knex
 */
exports.up = async function (knex, promise) {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments();
    table.uuid('uuid').index().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('username', 35).notNullable();
    email(table, 'email').notNullable().unique().index();
    table.string('password', 127).notNullable();
    table.string('avatar');
    table.string('first_name', 35);
    table.string('last_name', 35);
    table.string('tel', 15);
    table.string('profile');
    table.timestamp('last_login');
    references(table, 'role', false);
    references(table, 'title', false);
    references(table, 'country', false);
    references(table, 'address', false);
    references(table, 'university', false);
    addDefaultColumns(table);
    table.unique(['role_id', 'title_id', 'country_id', 'address_id', 'university_id']);
  });

  await knex.raw(onUpdateTrigger(tableNames.user));
};

exports.down = async function (knex, promise) {
  await knex.schema.dropTableIfExists(tableNames.user);

  await knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp"');
};
