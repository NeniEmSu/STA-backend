const tableNames = require('../../src/constants/tableName');

const states = [
  { name: 'Cherkasy Oblast', code: 'CK', country_id: 228 },
  { name: 'Chernihiv Oblast', code: 'CH', country_id: 228 },
  { name: 'Chernivtsi Oblast', code: 'CV', country_id: 228 },
  { name: 'Dnipropetrovsk Oblast', code: 'DP', country_id: 228 },
  { name: 'Donetsk Oblast', code: 'DT', country_id: 228 },
  { name: 'Ivano-Frankivsk Oblast', code: 'IF', country_id: 228 },
  { name: 'Kharkiv Oblast', code: 'KK', country_id: 228 },
  { name: 'Kherson Oblast', code: 'KS', country_id: 228 },
  { name: 'Khmelnytskyi Oblast', code: 'KM', country_id: 228 },
  { name: 'Kyiv Oblast', code: 'KV', country_id: 228 },
  { name: 'Kirovohrad Oblast', code: 'KH', country_id: 228 },
  { name: 'Luhansk Oblast', code: 'LH', country_id: 228 },
  { name: 'Lviv Oblast', code: 'LV', country_id: 228 },
  { name: 'Mykolaiv Oblast', code: 'MY', country_id: 228 },
  { name: 'Odessa Oblast', code: 'OD', country_id: 228 },
  { name: 'Poltava Oblast	', code: 'PL', country_id: 228 },
  { name: 'Rivne Oblast	', code: 'RV', country_id: 228 },
  { name: 'Sumy Oblast', code: 'SM', country_id: 228 },
  { name: 'Ternopil Oblast', code: 'TP', country_id: 228 },
  { name: 'Vinnytsia Oblast', code: 'VI', country_id: 228 },
  { name: 'Volyn Oblast', code: 'VO', country_id: 228 },
  { name: 'Zakarpattia Oblast', code: 'ZK', country_id: 228 },
  { name: 'Zaporizhia Oblast', code: 'ZP', country_id: 228 },
  { name: 'Zhytomyr Oblast', code: 'ZT', country_id: 228 },
  { code: 'FC', name: 'Abuja', country_id: 161 },
  { code: 'AB', name: 'Abia', country_id: 161 },
  { code: 'AD', name: 'Adamawa', country_id: 161 },
  { code: 'AK', name: 'Akwa Ibom', country_id: 161 },
  { code: 'AN', name: 'Anambra', country_id: 161 },
  { code: 'BA', name: 'Bauchi', country_id: 161 },
  { code: 'BY', name: 'Bayelsa', country_id: 161 },
  { code: 'BE', name: 'Benue', country_id: 161 },
  { code: 'BO', name: 'Borno', country_id: 161 },
  { code: 'CR', name: 'Cross River', country_id: 161 },
  { code: 'DE', name: 'Delta', country_id: 161 },
  { code: 'EB', name: 'Ebonyi', country_id: 161 },
  { code: 'ED', name: 'Edo', country_id: 161 },
  { code: 'EK', name: 'Ekiti', country_id: 161 },
  { code: 'EN', name: 'Enugu', country_id: 161 },
  { code: 'GO', name: 'Gombe', country_id: 161 },
  { code: 'IM', name: 'Imo', country_id: 161 },
  { code: 'JI', name: 'Jigawa', country_id: 161 },
  { code: 'KD', name: 'Kaduna', country_id: 161 },
  { code: 'KN', name: 'Kano', country_id: 161 },
  { code: 'KT', name: 'Katsina', country_id: 161 },
  { code: 'KE', name: 'Kebbi', country_id: 161 },
  { code: 'KO', name: 'Kogi', country_id: 161 },
  { code: 'KW', name: 'Kwara', country_id: 161 },
  { code: 'LA', name: 'Lagos', country_id: 161 },
  { code: 'NA', name: 'Nassarawa', country_id: 161 },
  { code: 'NI', name: 'Niger', country_id: 161 },
  { code: 'OG', name: 'Ogun', country_id: 161 },
  { code: 'ON', name: 'Ondo', country_id: 161 },
  { code: 'OS', name: 'Osun', country_id: 161 },
  { code: 'OY', name: 'Oyo', country_id: 161 },
  { code: 'PL', name: 'Plateau', country_id: 161 },
  { code: 'RI', name: 'Rivers', country_id: 161 },
  { code: 'SO', name: 'Sokoto', country_id: 161 },
  { code: 'TA', name: 'Taraba', country_id: 161 },
  { code: 'YO', name: 'Yobe', country_id: 161 },
  { code: 'ZA', name: 'Zamfara', country_id: 161 },
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableNames.state)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.state).insert(
        states.map((state) => {
          return {
            name: state.name,
            code: state.code,
            country_id: state.country_id,
          };
        })
      );
    });
};
