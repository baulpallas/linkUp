var router = require("express").Router();
var Preferences = require("../../models/preferences");

//works
router.get("/", async (req, res) => {
  const result = await Preferences.findAll();
  res.json({ result: result });
});

//works
router.post("/", async (req, res) => {
  const result = await Preferences.create(req.body);
  res.json(result);
});

//works
router.get("/:id", async (req, res) => {
  const result = await Preferences.findAll({
    where: { prefid: req.params.id }
  });
  res.json(result);
});

//works
router.put("/:id", async (req, res) => {
  const result = await Preferences.update(req.body, {
    where: { prefid: req.params.id }
  });
  res.json(result);
});

//works
router.delete("/:id", async (req, res) => {
  const result = await Preferences.destroy({
    where: { prefid: req.params.id }
  });
  res.json(result);
});

module.exports = router;
