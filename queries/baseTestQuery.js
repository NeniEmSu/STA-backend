const db = require('../config/dbConfig.js');

// GET ALL USERS
const find = () => {
  return db('test');
};

// GET SPECIFIC USER BY ID
const findById = (id) => {
  return db('test').where('id', id);

  // SQL RAW METHOD
  // return db.raw(`SELECT * FROM test
  //                  WHERE id = ${id}`);
};

// ADD A USER
const addUser = (user) => {
  return db('test').insert(user, 'id');
};

// UPDATE USER
const updateUser = (id, post) => {
  return db('test').where('id', id).update(post);
};

// REMOVE USER
const removeUser = (id) => {
  return db('test').where('id', id).del();
};

module.exports = {
  find,
  findById,
  addUser,
  updateUser,
  removeUser,
};
