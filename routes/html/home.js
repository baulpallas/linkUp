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

module.exports = router;
