const router = require("express").Router();
const { User } = require("../../models");

//creating a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req, res);
    //save the session data
    req.sessionsave(() => {
      req.session.user_id = userData.id;
      req.sessions.logged_in = true;
// converting user information into a json object
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

//login by  user email
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .statusMessage(400)
        .json({ message: "Email or Password is incorrect. Please try again." });
      return;
    }
// checks to see if the password associated with the user is correct
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
      //throws an error
        .status(400)
        .json({ message: "Email or Password is incorrect. Please try again." });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.sessions.logged_in = true;
// if succesfully logged in
      res.json({
        user: userData,
        message: "You have been successfully logged in!",
      });
    });
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
});

module.exports = router;