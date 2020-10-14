const db = require('../../config/dbConfig.js');

const tableNames = require('../constants/tableName');

module.exports = {
  getAll() {
    return db(tableNames.user);
  },

  getOne(id) {
    return db(tableNames.user).where('id', id).first();
  },

  async signUp(users) {
    const idArray = await db(tableNames.user).insert(users, 'uuid');
    return idArray[0];
  },

  update(id, users) {
    return db(tableNames.user).where('id', id).update(users);
  },

  delete(id) {
    return db(tableNames.user).where('id', id).delete();
  },
};
