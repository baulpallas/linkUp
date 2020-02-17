const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.JAWSDB_URL || "mysql://root:@localhost:3306/meetup_db"
);

module.exports = sequelize;
