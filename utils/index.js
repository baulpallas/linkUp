const computeLocation = async event => {
  return event.preferences[0].dataValues;
  const { lat, lng } = await axios.get("google/geolocate");
  const money = Math.avg();
};

module.exports = {
  computeLocation
};
