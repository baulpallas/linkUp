var router = require("express").Router();

router.get("/", function(req, res) {
  res.render("preferences", {});
});

module.exports = router;
