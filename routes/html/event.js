var router = require("express").Router();
<<<<<<< HEAD

router.get("/", async function(req, res) {
  res.render("event", {});
});

router.get("/", async function(req, res) {
  res.render("event", {});
=======
var Creator = require("../../models/creator");
var Event = require("../../models/event");
var Preferences = require("../../models/preferences");

router.get("/event", function(req, res) {
  res.render("event", {});
});
// Works
router.post("/event", async (req, res) => {
  console.log(req.params);
  var Event = await Event.create(req.body);
  res.render("event", { event: event });
>>>>>>> master
});

module.exports = router;
