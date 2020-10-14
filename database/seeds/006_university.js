const tableNames = require('../../src/constants/tableName');

const universities = [
  { name: 'Vinnytsia National Medical University. N. I. Pirogov', code: 'VNMU' },
  { name: 'Petro Mohyla Black Sea National University', code: 'PMBSNU' },
  { name: 'Bogomolets National Medical University', code: 'BNMU' },
  { name: 'Cherkasy National University', code: 'CNU' },
  { name: 'Danylo Halytsky Lviv National Medical University', code: 'DHLNMU' },
  { name: 'Dnipropetrovsk State Medical Academy', code: 'DSMA' },
  { name: 'Donetsk National Medical University', code: 'DNMU' },
  { name: 'International European University', code: 'IEU' },
  { name: 'Ivano-Frankivsk National Medical University', code: 'IFNMU' },
  { name: 'Kharkiv National Medical University', code: 'KNMU' },
  { name: 'Kyiv Medical University of UAFM', code: 'KMU' },
  { name: 'Odessa International Medical University', code: 'OIMU' },
  { name: 'Poltava State Medical and Dental University', code: 'PSMDU' },
  { name: 'Uzhhorod National University, Faculty of Medicine', code: 'UNUEM' },
  { name: 'VN Karazin Kharkiv National University', code: '' },
  { name: 'Taras Shevchenko National University', code: 'TSNU' },
  { name: 'Ternopil National Medical University', code: 'TNMU' },
  { name: 'Sumy state medical university', code: 'SSMU' },
  { name: 'medical university', code: 'MU' },
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableNames.university)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.university).insert(
        universities.map((uni) => {
          return { name: uni.name, code: uni.code };
        })
      );
    });
};
