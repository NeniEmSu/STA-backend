const db = require('../../config/dbConfig.js');

const tableNames = require('../constants/tableName');

module.exports = {
  getAll() {
    return db(tableNames.state);
  },

  getById(id) {
    return db(tableNames.state).where('id', id).first();
  },

  update(id, state) {
    return db(tableNames.state).where('id', id).update(state);
  },

  delete(id) {
    return db(tableNames.state).where('id', id).del();
  },
};
