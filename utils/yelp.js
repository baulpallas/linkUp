let yelpAPI = require("yelp-api");
let Yelp = require("../config/index");

const apiKey = "";
let yelp = new yelpAPI(apiKey);

let limit = 5;

let params = [
  { longitude: lng },
  { latitude: lat },
  { price: price },
  { open_at: open_at }
];
console.log(params);

const yelpQuery = function(params) {
  yelp
    .query("businesses/search", params)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = yelpQuery;
