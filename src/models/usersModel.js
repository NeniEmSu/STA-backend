const { Model } = require('objection');

const tableNames = require('../constants/tableName');
const schema = require('../schema/usersSchema.json');

class User extends Model {
  static get tableName() {
    return tableNames.user;
  }

  static get jsonSchema() {
    return schema;
  }
}

module.exports = User;
