var router = require("express").Router();
var Creator = require("../../models/creator");

router.get("/", function(req, res) {
  res.render("home");
});

router.post("/", async (req, res) => {
  console.log(req.params);
  const creator = await Creator.create(req.body);
  res.render("home", { creator: creator });
});

module.exports = router;
