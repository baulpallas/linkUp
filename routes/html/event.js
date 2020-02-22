var router = require("express").Router();

var Event = require("../../models/event");

router.get("/", async function(req, res) {
  var result = await Event.findAll();
  // console.log(result);
  res.render("event", {});
});

router.post("/", async (req, res) => {
  var Event = await Event.create(req.body);
  console.log(req.body);
  res.render("event", { event: event });
});

module.exports = router;
