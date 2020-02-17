const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Preferences = sequelize.define("preferences", {
  prefid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  eventid: {
    type: DataTypes.STRING
  },
  zipcode: {
    type: DataTypes.INTEGER
  },
  priceid: {
    type: DataTypes.INTEGER
  },
  availability: {
    type: DataTypes.TIME
  }
});
