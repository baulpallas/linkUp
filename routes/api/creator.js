var router = require("express").Router();
var Creator = require("../../models/creator");

router.get("/", async (req, res) => {
  const creators = await Creator.findAll();
  res.json({ creators: creators });
});

router.post("/", async (req, res) => {
  const result = await Creator.create(req.body);
  res.json(result);
});

//works
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const creator = await Creator.findAll({
    where: { creatorid: req.params.id }
  });
  res.json(creator);
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

module.exports = router;
