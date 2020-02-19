var router = require("express").Router();
var Event = require("../../models/event");
var Preferences = require("../../models/preferences");

//works
router.get("/", async (req, res) => {
  const events = await Event.findAll();
  res.json({ events: events });
});

//works
router.post("/", async (req, res) => {
  const result = await Event.create(req.body);
  res.json(result);
});

//works
router.get("/:id", async (req, res) => {
  const result = await Event.findAll({ where: { eventid: req.params.id } });
  res.json(result);
});

//works
router.put("/:id", async (req, res) => {
  const result = await Event.update(req.body, {
    where: { eventid: req.params.id }
  });
  res.json(result);
});

//works
router.delete("/:id", async (req, res) => {
  const result = await Event.destroy({ where: { eventid: req.params.id } });
  res.json(result);
});

//works
router.get("/:id/preferences", async (req, res) => {
  const result = await Preferences.findAll({
    where: { eventid: req.params.id }
  });
  res.json(result);
});

//works
router.post("/:id/preferences", async (req, res) => {
  const result = await Preferences.create(req.body, {
    where: { eventid: req.params.id }
  });
  res.json(result);
});

module.exports = router;
