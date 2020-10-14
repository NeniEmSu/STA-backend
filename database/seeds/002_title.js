const tableNames = require('../../src/constants/tableName');

const titles = ['Sir', 'Madam', 'Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Professor'];

// console.log(
//   titles.map((title) => {
//     return { name: title };
//   })
// );

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableNames.title)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.title).insert(
        titles.map((title) => {
          return { name: title };
        })
      );
    });
};

// Sir (adult male of any age)
// Ma'am (adult female - North American)
// Madam (adult female)
// Mr + last name (any man)
// Mrs + last name (married woman who uses her husband's last name)
// Ms + last name (married or unmarried woman; common in business)
// Miss + last name (unmarried woman)
// Dr + last name (some doctors go by Dr + first name)
// Professor + last name (in a university setting)
