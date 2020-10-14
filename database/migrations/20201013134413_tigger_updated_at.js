/**
 * @param {import('knex')} knex
 */
const ON_UPDATE_TIMESTAMP_FUNCTION = `
CREATE OR REPLACE FUNCTION update_timestamp() RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;
`;

const DROP_ON_UPDATE_TIMESTAMP_FUNCTION = `DROP FUNCTION IF EXISTS update_timestamp() CASCADE;`;

exports.up = (knex) => knex.raw(ON_UPDATE_TIMESTAMP_FUNCTION);
exports.down = (knex) => knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION);
