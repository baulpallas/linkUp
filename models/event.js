var sequelize = require("../config");
const { DataTypes } = require("sequelize");
const Creator = require("./creator");

const Event = sequelize.define("event", {
  eventid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  partysize: {
    type: DataTypes.INTEGER
  }
});

module.exports = Event;
