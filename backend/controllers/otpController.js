const OTP = require("../models/otpModel")
const User = require("../models/userModel")
const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv');
dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.verifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body
    await OTP.find({ email }).sort({ createdAt: -1 }).limit(1)
    .then((existingOtp) => {
      if (existingOtp.length === 0) {
        return res.status(500).send("The code is expired. Please send the code again")
      }
      if (otp === existingOtp[0].otp) {
        User.findOneAndUpdate(
          { email: email },
          { $set: { emailVerified: true } },
          { new: true }
        ).then(async () => {
          await OTP.findOneAndDelete({email})
          return res.status(200).send("Email is verified, please wait for admin's approval")
        })
      }
    })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.codeAgain = async (req, res) => {
  try {
    const { email } = req.body
    const newOTP = new OTP({
      email: email, 
      otp: Math.floor(100000 + Math.random() * 900000)
    })
    await newOTP.save()
    .then((dataToken) => {
      const msg = {
        to: dataToken.email,
        from: process.env.MAIL_FROM,
        subject: 'Email verification',
        html: `Verification code: <strong>${dataToken.otp}</strong>`
      }
      sgMail.send(msg)
      .then(() => {
        console.log("Email Sent!")
        res.status(200).json({msg: "Email sent! Please verify your email."});
      })
    })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}