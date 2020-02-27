const axios = require("axios").default;
const geolib = require("geolib");
let yelpAPI = require("yelp-api");
let Yelp = require("../config/index");

// import { getCenter} from 'geolib';

const computeLocation = async event => {
  //initialize variables
  const Y = event.preferences[0].dataValues;
  let { lat, lng } = Y;
  let X = event.preferences[1].dataValues;
  [latX, lngX] = [X.lat, X.lng];

  let priceX = X.price;
  let priceY = Y.price;

  let availX = X.availability;
  let availY = Y.availability;

  let midpoint = geolib.getCenter([
    {
      latitude: latX,
      longitude: lngX
    },
    { latitude: lat, longitude: lng }
  ]);
  let { longitude, latitude } = midpoint;

  const money = Math.floor((priceX + priceY) / 2);

  function determineTime(availX, availY) {
    if (availX > availY) {
      return availY;
    }
    if (availY > availX) {
      return availY;
    } else {
      return availY;
    }
  }

  const apiKey = process.env.YELP_APIKEY;
  let yelp = new yelpAPI(apiKey);
  let limit = 5;
  let params = [
    { longitude: longitude },
    { latitude: latitude },
    { categories: "bars" },
    { price: money },
    { limit: limit }
  ];

  const yelpQuery = function(params) {
    yelp
      .query("businesses/search", params)
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  };
  yelpQuery(params);
};

module.exports = {
  computeLocation
};
