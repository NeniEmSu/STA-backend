const tableNames = require('../../src/constants/tableName');

const addresses = [
  {
    street_address_1: 'Polovoho 2b',
    city: 'Ternopil',
    zipcode: '46001',
    country_id: 228,
  },
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableNames.address)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.address).insert(
        addresses.map((address) => {
          return {
            street_address_1: address.street_address_1,
            city: address.city,
            zipcode: address.zipcode,
            country_id: address.country_id,
          };
        })
      );
    });
};
