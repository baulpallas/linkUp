var sequelize = require("../config");
const { DataTypes } = require("sequelize");
const Event = require("./event");

const Preferences = sequelize.define("preferences", {
  prefid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  lat: {
    type: DataTypes.FLOAT
  },
  lng: {
    type: DataTypes.FLOAT
  },
  price: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  },
  availability: {
    type: DataTypes.DATE
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

Preferences.associate();

Preferences.sync();

module.exports = Preferences;
