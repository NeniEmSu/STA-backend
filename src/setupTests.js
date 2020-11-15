const db = require('../config/dbConfig.js');

module.exports = async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
};
