let yelpAPI = require("yelp-api");

const apiKey = "";
let yelp = new yelpAPI(apiKey);

console.log(process.env.DATABASE_URL);

//Longitude/Latitude = Geocoder Midpoint
//Price = Difference between two price ranges
//Open_At = Open places in correlation with latest time input, out of two inputs

let lng = 47.222;
let lat = 69.333;
let price = 3;
let open_at = "8:00";

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
