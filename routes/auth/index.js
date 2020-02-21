const router = require("express").Router();
const Creator = require("./../../models/creator");

// auth0, passport, passport-local, passport-jwt , express-session, express-jwt

router.post("/login", async (req, res) => {
  console.log("hello");
  const { email, password } = req.body;
  let user = null;
  try {
    user = await Creator.findAll({ where: { email: email } });
  } catch (err) {
    res.status(500).json({ message: "stuff broke" });
  }
  if (!user)
    res.status(400).json({
      message: "User with that email does not exist.  Try another email."
    });
  if (user && user.password !== password)
    res.status(400).json({ message: "Incorrect passowrd" });
  if (user && user.password === password) res.redirect("/events");

  res.status(500).json({ message: "stuff broke" });
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
    res.status(201).redirect("/events");
  }
  res.status(500).json({ message: "stuff broke" });
});

module.exports = router;
