const db = require('../config/dbConfig.js');

module.exports = {
  getAll() {
    return db('product');
  },

  getOne(id) {
    return db('product').where('id', id).first();
  },

  async create(product) {
    const idArray = await db('product').insert(product, 'id');
    return idArray[0];
  },

  update(id, product) {
    return db('product').where('id', id).update(product);
  },

  delete(id) {
    return db('product').where('id', id).delete();
  },
};
