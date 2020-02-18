var router = require("express").Router();

router.use("/creator", require("./creator"));

router.use("/event", require("./event"));

router.use("/preferences", require("./preferences"));

module.exports = router;
