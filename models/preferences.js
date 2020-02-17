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
  zipcode: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
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

Preferences.associate();

Preferences.sync();

module.exports = Preferences;
