const Creator = require("./creator");
const Event = require("./event");
const Preferences = require("./preferences");

Creator.hasMany(Event, {
  foreignKey: {
    name: "creatorid",
    allowNull: false
  }
});

Event.belongsTo(Creator, {
  foreignKey: {
    name: "creatorid",
    allowNull: false
  }
});

Event.hasMany(Preferences, {
  foreignKey: {
    name: "eventid",
    allowNull: false
  }
});

Preferences.belongsTo(Event, {
  foreignKey: {
    name: "eventid",
    allowNull: false
  }
});

Creator.sync();
Event.sync();
Preferences.sync();

module.exports = {
  Creator,
  Event,
  Preferences
};
