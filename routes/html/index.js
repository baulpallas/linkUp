var router = require("express").Router();

router.use("/", require("./home"));

router.use("/result", require("./result"));

router.use("/event", require("./event"));

module.exports = router;
