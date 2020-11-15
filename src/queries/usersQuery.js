const db = require('../../config/dbConfig.js');

const tableNames = require('../constants/tableName');

module.exports = {
  getAll() {
    return db(tableNames.user).select('uuid', 'username', 'email', 'last_login');
  },

  getById(id) {
    return db(tableNames.user).where('uuid', id).first();
  },

  getByEmail(email) {
    return db(tableNames.user).where('email', email).first();
  },

  async signUp(user) {
    const idArray = await db(tableNames.user).insert(user, 'uuid');
    return idArray[0];
  },

  update(id, user) {
    return db(tableNames.user).where('uuid', id).update(user);
  },

  delete(id) {
    return db(tableNames.user).where('uuid', id).del();
  },
};
