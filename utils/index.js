const axios = require("axios").default;
const gmaps = process.env.GOOGLEMAPS_KEY;
console.log(gmaps);

const computeLocation = async event => {
  const Y = event.preferences[0].dataValues;
  let { lat, lng } = Y;

  console.log(lat, lng);
  let X = event.preferences[1].dataValues;
  [latX, lngX] = [X.lat, X.lng];

  // return event.preferences[0].dataValues;
  const maps = await axios
    .get(
      `https://maps.googleapis.com/maps/api/js?key=${gmaps}&libraries=geometry`
    )
    .then(function(response) {
      let xPlace = new google.maps.LatLng(latx, lngx);
      let yPlace = new google.maps.LatLng(lat, lng);
      const midpoint = google.maps.geometry.spherical.interpolate(
        xPlace,
        yPlace,
        0.5
      );
      console.log(JSON.stringify(midpoint));
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

  return maps;

  const money = Math.avg();
};

module.exports = {
  computeLocation
};
