const router = require("express").Router();

const { Event, Preferences } = require("../../models");
const utils = require("../../utils");

router.get("/", async function(req, res) {
  res.render("event");
});

router.get("/:id", async function(req, res) {
  const [event] = await Event.findAll({
    where: { eventid: req.params.id },
    include: Preferences
  });

  const { dataValues: eventDetails = {} } = event;
  const Y = event.preferences[0].dataValues;
  let X = event.preferences[1].dataValues;
  let availX = X.availability;
  let availY = Y.availability;
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

  if (eventDetails.preferences && eventDetails.preferences.length > 1) {
    const eventLocation = await utils.computeLocation(eventDetails);
    if (eventLocation) {
      res.render("eventDetails", {
        event: JSON.stringify({
          ...eventDetails,
          location: eventLocation,
          time: determineTime(availX, availY)
        })
      });
    }
  } else {
    res.render("preferences");
  }
});

module.exports = router;
