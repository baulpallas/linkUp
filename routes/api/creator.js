var router = require("express").Router();
var Creator = require("../../models/creator");

router.get("/", async (req, res) => {
  const result = await Creator.findAll();
  res.json({ result: result });
});

router.post("/", async (req, res) => {
  const result = await Creator.create(req.body);
  res.json(result);
});

//works
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const result = await Creator.findAll({
    where: { creatorid: req.params.id }
  });
  res.json(result);
});

//works
router.put("/:id", async (req, res) => {
  const result = await Creator.update(req.body, {
    where: { creatorid: req.params.id }
  });
  res.json(result);
});

//works
router.delete("/:id", async (req, res) => {
  const result = await Creator.destroy({ where: { creatorid: req.params.id } });
  res.json(result);
});

router.get("/:id/event", async (req, res) => {
  const result = await Event.findAll({
    where: { creatorid: req.params.id }
  });
  res.json(result);
});
router.post("/:id/event", async (req, res) => {
  const result = await Event.create(req.body, {
    where: { creatorid: req.params.id }
  });
  res.json(result);
});

module.exports = router;
