const db = require('../../config/dbConfig.js');

const tableNames = require('../constants/tableName');

const fields = ['id', 'name', 'code'];

module.exports = {
  getAll() {
    return db(tableNames.country).select(fields);
  },

  async getById(id) {
    const [country] = await db(tableNames.country).select(fields).where('id', id);
    return country;
  },

  update(id, country) {
    return db(tableNames.country).where('id', id).update(country);
  },

  delete(id) {
    return db(tableNames.country).where('id', id).del();
  },
};
