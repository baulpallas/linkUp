var router = require("express").Router();

router.get("/", function(req, res) {
  res.render("result", {});
});

module.exports = router;
