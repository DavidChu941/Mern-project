const router = require("express").Router();
const passport = require('passport');

const {
  verifyEmail,
  codeAgain
} = require("../controllers/otpController")

router.route("/verifyEmail").post(verifyEmail);
router.route("/codeAgain").post(codeAgain);

module.exports = router;
