var router = require("express").Router();
var Preferences = require("../../models/preferences");

router.get("/", async (req, res) => {
  const preferences = await Preferences.findAll();
  res.json({ preferences: preferences });
});

router.post("/", async (req, res) => {
  const result = await Preferences.create(req.body);
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const preference = await Preferences.findAll({
    where: { id: req.params.id }
  });
  res.json(preference);
});

router.put("/:id", async (req, res) => {
  const result = await Preferences.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const result = await Preferences.destroy({ where: { id: req.params.id } });
  res.json(result);
});

module.exports = router;
