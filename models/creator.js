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

Creator.associate = function(models) {
  Creator.hasMany(models.Event, {
    onDelete: "cascade"
  });
};

Creator.sync();
