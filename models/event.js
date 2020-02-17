const sequelize = require("../config");
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
  },
  creatorid: {
    type: DataTypes.INTEGER
  }
});

Event.associate = function associate() {
  Event.belongsTo(Creator, {
    foreignKey: {
      name: "creatorid",
      allowNull: false
    }
  });
};

Event.associate();

Event.sync();

module.exports = Event;
