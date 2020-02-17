const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Creator = sequelize.define("creator", {
  creatorid: {
    type: Sequelize.Integer,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: sequelize.STRING
  },
  nickname: {
    type: sequelize.STRING
  }
});

Creator.sync();

module.exports = Creator;
