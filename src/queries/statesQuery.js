const db = require('../../config/dbConfig.js');

const tableNames = require('../constants/tableName');

const fields = ['id', 'name', 'code'];

module.exports = {
  getAll() {
    // TODO: filter by country
    // TODO: join to country table
    return db(tableNames.state).select(fields);
  },

  async getById(id) {
    const [state] = await db(tableNames.state).select(fields).where('id', id);
    return state;
  },

  update(id, state) {
    return db(tableNames.state).where('id', id).update(state);
  },

  delete(id) {
    return db(tableNames.state).where('id', id).del();
  },
};
