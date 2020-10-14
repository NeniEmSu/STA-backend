const tableNames = require('../../src/constants/tableName');

const subjects = [
  'Anatomy',
  'Physiology',
  'Histology',
  'Biology',
  'Chemistry',
  'Biochemistry',
  'Physics',
  'Hygiene and Ecology',
  'Internal Medicine',
  'Psychiatry',
  'Neurology',
  'Obstetrics and Gynecology',
  'Pediatrics',
  'Surgery',
  'Anesthesiology',
  'Dermatology',
  'Emergency Medicine',
  'Ophthalmology',
  'Radiology',
  'Urology',
  'Social Medicine',
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableNames.subject)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.subject).insert(
        subjects.map((subject) => {
          return { name: subject };
        })
      );
    });
};
