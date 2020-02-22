const router = require("express").Router();
const Creator = require("./../../models/creator");

// auth0, passport, passport-local, passport-jwt , express-session, express-jwt

router.get("/login", async (req, res) => {
  console.log("hello");
  const result = await Creator.findAll();
  res.json({ result: result });
});

router.post("/login", async (req, res) => {
  const email = req.body.exhostemail;
  console.log(email);
  const password = req.body.exhostpassword;
  console.log(password);
  let user = null;
  try {
    user = await Creator.findAll({ where: { email: email } });
    console.log(user[0].dataValues);
  } catch (err) {
    res.status(500).json({ message: "stuff broke" });
    console.log(messagew);
  }
  if (!user) {
    res.status(500).json({ message: "user doesn't exist" });
    console.log(message);
  }

  if (user && user[0].dataValues.password !== password) {
    res.sendStatus(400).json({ message: "Incorrect passowrd" });
    console.log(message);
  }
  if (user && user[0].dataValues.password === password) {
    console.log("stepped in");
    res.redirect("../html/event");
  }
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  let user = null;
  try {
    user = await Creator.find({ where: { email: email } });
  } catch (err) {
    res.status(500).json({ message: "stuff broke" });
  }

  if (user)
    res.status(400).json({
      message: "User with that email already exists.  Try another email."
    });
  const newUser = await user.create({ email, password });
  if (newUser) {
    res.status(201).redirect("home");
  }
  res.status(500).json({ message: "stuff broke" });
});

module.exports = router;
