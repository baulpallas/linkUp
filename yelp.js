let yelpAPI = require('yelp-api');

let apiKey = 'YOUR_API_KEY';
let yelp = new yelpAPI(apiKey);


//Longitude/Latitude = Geocoder Midpoint
//Price = Difference between two price ranges
//Open_At = Open places in correlation with latest time input, out of two inputs
let params = [{ longitude: '' }, { latitude: '' }, { price: '' }, { open_at: '' }];

yelp.query('businesses/search', params)
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
});