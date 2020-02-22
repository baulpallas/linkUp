var router = require("express").Router();
var Creator = require("../../models/creator");
var Event = require("../../models/event");
var Preferences = require("../../models/preferences");

router.get("/", function(req, res) {
  res.render("event", {});
});

// Works
// router.post("/event", async (req, res) => {
//   console.log(req.params);
//   var Event = await Event.create(req.body);
//   res.render("event", { event: event });
// });

module.exports = router;
