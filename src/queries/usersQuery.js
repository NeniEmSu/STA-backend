const db = require('../../config/dbConfig.js');

module.exports = {
  getAll() {
    return db('users');
  },

  getOne(id) {
    return db('users').where('id', id).first();
  },

  async signUp(users) {
    const idArray = await db('users').insert(users, 'id');
    return idArray[0];
  },

  update(id, users) {
    return db('users').where('id', id).update(users);
  },

  delete(id) {
    return db('users').where('id', id).delete();
  },
};
