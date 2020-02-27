var router = require("express").Router();
var Preferences = require("../../models/preferences");

var googlemaps = process.env.GOOGLEMAPS_KEY;
console.log(googlemaps);

// router.post("/", async (req, res) => {
//   console.log("hello");
//   const eventid = req.body.eventid;
//   console.log(eventid);
//   let preference = null;
//   try {
//     preference = await Preferences.findAll({
//       where: { eventid: req.params.eventid }
//     });
//     console.log(preference);
//   } catch (err) {
//     res.status(500).json({ message: "stuff broke" });
//     console.log(err);
//     // res.redirect("../html/event");
//   }
// });

module.exports = router;
