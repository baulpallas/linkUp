var router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/api", require("./api"));
router.use("/utils", require("./utils"));
router.use("/", require("./html"));

module.exports = router;
