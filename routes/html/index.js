var router = require("express").Router();

router.use("/", require("./home"));
router.use("/event", require("./event"));
router.use("/result", require("./result"));
router.use("/preferences", require("./preferences"));

module.exports = router;
