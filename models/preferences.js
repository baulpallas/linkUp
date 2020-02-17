const sequelize = require("../config");
const { DataTypes } = require("sequelize");
const Event = require("./event");
const Price = require("./price");

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

Preferences.associate = function associate() {
  Preferences.belongsTo(Event, {
    foreignKey: {
      name: "eventid",
      allowNull: false
    }
  });
};

Preferences.associate = function associate() {
  Preferences.belongsTo(Event, {
    foreignKey: {
      name: "eventid",
      allowNull: false
    }
  });
  Preferences.belongsTo(Price, {
    foreignKey: {
      name: "priceid",
      allowNull: false
    }
  });
};

Preferences.associate();

Peferences.sync();

module.exports = Preferences;
