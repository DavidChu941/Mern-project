const router = require("express").Router();
const passport = require('passport');

const {
  register, 
  login, 
  getAllUsers,
  handleUserByadmin,
  updateProfile
} = require("../controllers/userController")

router.route("/register").post(register);
router.route("/login").post(login);
// router.route("/getAllUsers").get(passport.authenticate('jwt', { session: false }), getAllUsers);
router.route("/getAllUsers").get(getAllUsers);
router.route("/handleUserByAdmin").post(handleUserByadmin);
router.route("/updateProfile").post(updateProfile);

module.exports = router;
