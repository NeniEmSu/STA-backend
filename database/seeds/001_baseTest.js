const names = ['Bob', 'Roenz', 'Joe'];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('test')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert(
        names.map((name) => {
          return { name: name };
        })
      );
    });
};
