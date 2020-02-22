var router = require("express").Router();
var Event = require("../../models/event");

router.get("/", async function(req, res) {
  res.render("event");
});

router.post("/", async (req, res) => {
  // console.log(req);
  const Event = await Event.create(req.body);
  res.render("home", { event: event });
});

module.exports = router;
