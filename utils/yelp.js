let yelpAPI = require("yelp-api");
let Yelp = require("../config/index");
let Sequelize = require("sequelize");

const apiKey = "";
let yelp = new yelpAPI(apiKey);

const sequelize = new Sequelize(
  process.env.DATABASE_URL || "mysql://root:@localhost:3306/meetup_db"
);

console.log(process.env.DATABASE_URL);

//YELP API WORKS 

// let lng = 47.222;
// let lat = 69.333;
let location = "07013"; //INCORPORATE GEOCODER? 

let price = // DOESNT CONNECT TO DB
  Yelp.findAll({
  attributes: [
    [sequelize.fn('AVG', sequelize.col('price')), 'avg_price'],
  ],
  include: [
    {model: preferences, attributes: ['eventid']}
  ],
  group: ['preferences.eventid']
}).then(result => result.json(result)); 

let open_at = // DOESNT CONNECT TO DB / CONSIDER OPEN_NOW 
Yelp.findAll({
  attributes: [
    [sequelize.fn('MAX', sequelize.col('availability')), 'best_availability'],
  ],
  include: [
    {model: preferences, attributes: ['eventid']}
  ],
  group: ['preferences.eventid']
}).then(result => result.json(result)); 

let limit = 5; //LIMITS SEARCH RESULTS TO 5

let params = [
  { location: location },
  { price: price },
  { open_at: open_at },
  { limit: limit }
];
//console.log(params);

const yelpQuery = 
  yelp
    .query("businesses/search", params)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
});


module.exports = yelpQuery;
