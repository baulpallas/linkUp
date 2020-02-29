const axios = require("axios").default;
const geolib = require("geolib");
let yelpAPI = require("yelp-api");
let Yelp = require("../config/index");

// import { getCenter} from 'geolib';

const computeLocation = async event => {
  let X;
  let priceX;
  let availX;
  let latX;
  let lngX;
  let midpoint;
  let longitude;
  let latitude;
  let money;
  const Y = event.preferences[0].dataValues;
  let { lat, lng } = Y;
  let priceY = Y.price;
  let availY = Y.availability;

  if (event.partysize > 1) {
    X = event.preferences[1].dataValues;
    latX = X.lat;
    lngX = X.lng;
    priceX = X.price;
    availX = X.availability;

    midpoint = geolib.getCenter([
      {
        latitude: latX,
        longitude: lngX
      },
      { latitude: lat, longitude: lng }
    ]);
    longitude = midpoint.longitude;
    latitude = midpoint.latitude;
    money = Math.floor((priceX + priceY) / 2);
  } else {
    longitude = lng;
    latitude = lat;
    money = priceY;
  }

  const apiKey = process.env.YELP_APIKEY;
  let yelp = new yelpAPI(apiKey);
  let limit = 5;
  let params = [
    { longitude: longitude },
    { latitude: latitude },
    { categories: "bars" },
    { radius: 400 },
    { price: money },
    { limit: limit }
  ];

  const yelpQuery = async function(params) {
    console.log("debug", params);
    let yelpResponse;
    await yelp
      .query("businesses/search", params)
      .then(data => {
        yelpResponse = data;
      })
      .catch(err => {
        console.log(err);
      });
    return yelpResponse;
  };
  return await yelpQuery(params);
};

module.exports = {
  computeLocation
};
