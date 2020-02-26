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
  console.log("DEBUG", eventDetails);

  if (eventDetails.preferences && eventDetails.preferences.length > 1) {
    const eventLocation = await utils.computeLocation(eventDetails);
    if (eventLocation) {
      res.render("eventDetails", {
        event: JSON.stringify({ ...eventDetails, location: eventLocation })
      });
    }
  } else {
    res.render("preferences");
  }
});

module.exports = router;
