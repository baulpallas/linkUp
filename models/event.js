const sequelize = require("../config");
const { DataTypes } = require("sequelize");

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

Event.associate = function(models) {
  Event.belongsTo(models.Creator);
};

Event.sync();

Event.sync();
