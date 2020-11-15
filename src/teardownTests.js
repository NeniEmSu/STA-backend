const db = require('../config/dbConfig.js');

module.exports = async () => {
  await db.destroy();
};
