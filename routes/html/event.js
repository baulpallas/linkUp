var router = require("express").Router();
var Event = require("../../models/event");

<<<<<<< HEAD
router.get("/", async function(req, res) {
  res.render("event");
});

router.post("/", async (req, res) => {
  // console.log(req);
  const Event = await Event.create(req.body);
  res.render("home", { event: event });
});
=======
router.get("/", function(req, res) {
  res.render("event", {});
});

// Works
// router.post("/event", async (req, res) => {
//   console.log(req.params);
//   var Event = await Event.create(req.body);
//   res.render("event", { event: event });
// });
>>>>>>> master

module.exports = router;
