var router = require("express").Router();
var Preferences = require("../../models/preferences");

router.post("/", async (req, res) => {
  const prefid = req.body.prefid;
  console.log(prefid);
  try {
    preference = await Preferences.findAll({
      where: { eventid: req.params.id }
    });
    console.log(user[0].dataValues);
  } catch (err) {
    res.status(500).json({ message: "stuff broke" });
    // res.redirect("../html/event");
  }
});

module.exports = router;
