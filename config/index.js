var Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_URL ||
    "mysql://a42p3imwul29ukd2:v9z415yli71v1m1b@ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qk0it2sq8unsr7rl"
);

module.exports = sequelize;
