const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Price = sequelize.define("price", {
  priceid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  priceappetite: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 4
    }
  }
});

Price.sync();

module.exports = Price;
