exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('test')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert([{ name: 'Bob' }, { name: 'Roenz' }, { name: 'Joe' }]);
    });
};
