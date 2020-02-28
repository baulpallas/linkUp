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

  console.log("debug", eventDetails.partysize);
  let X;
  let availX;
  let time;
  if (
    eventDetails.preferences &&
    eventDetails.preferences.length >= eventDetails.partysize
  ) {
    let Y = event.preferences[0].dataValues;
    let availY = Y.availability;

    if (eventDetails.preferences.length > 1) {
      X = event.preferences[1].dataValues;
      availX = X.availability;
      time = determineTime(availX, availY);
    } else {
      time = availY;
    }

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
    const eventLocation = await utils.computeLocation(eventDetails);
    if (eventLocation) {
      let clean = JSON.parse(eventLocation);
      res.render("eventDetails", {
        event: {
          ...clean.businesses,
          location: eventLocation,
          time: time
        }
      });
    }
  } else {
    res.render("preferences");
  }
});

module.exports = router;
