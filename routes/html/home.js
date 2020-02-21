var router = require("express").Router();
var Creator = require("../../models/creator");
var Event = require("../../models/event");
var Preferences = require("../../models/preferences");

router.get("/", async function(req, res) {
  res.render("home", {});
});

// Works
router.post("/", async (req, res) => {
  console.log(req.params);
  const creator = await Creator.create(req.body);
  res.render("home", { creator: creator });
});

router.post("/", async (req, res) => {
  console.log(req.params);
  const Event = await Event.create(req.body);
  res.render("home", { event: event });
});
// // Haven't Checked
// router.post("/", async (req, res) => {
//   console.log(req.params);
//   const result = await Creator.create(req.body);
//   res.render("home", { result: result });
// });

// // Haven't Checked
// router.post("/", async (req, res) => {
//   console.log(req.params);
//   const result = await Preferences.create(req.body);
//   res.render("home", { result: result });
// });

// //haven't checked
// router.put("/:id", async (req, res) => {
//   connsole.log(req.params);
//   const result = await Event.update(req.body, {
//     where: { eventid: req.params.id }
//   });
//   res.json(result);
// });

module.exports = router;
