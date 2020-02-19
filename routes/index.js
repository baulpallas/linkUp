var router = require("express").Router();

router.use("/api", require("./api"));
router.use("/", require("./html"));

module.exports = router;
