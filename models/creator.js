var sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Creator = sequelize.define("creator", {
  creatorid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  nickname: {
    type: DataTypes.STRING
  }
});

Creator.sync();

module.exports = Creator;
