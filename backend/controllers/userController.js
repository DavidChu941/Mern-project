const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const OTP = require("../models/otpModel")
const keys = require("../config/keys")
const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv');
dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.register = async (req, res) => {
	try {
		let { email, password, role, firstName, lastName, level, companyName, phoneNumber, mobileNumber, addressOne, addressTwo, city, state, zipcode, website } = req.body;
	
		const existingUser = await User.findOne({ email: email });
		if (existingUser)
			return res
				.status(400)
				.json({ msg: "An account with this email already exists." });
	
		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);
	
		const newUser = new User({
			email: email,
			password: passwordHash,
			firstName: firstName, 
      lastName: lastName,
			level: level, 
      role: role, 
      companyName: companyName,
      phoneNumber: phoneNumber,
      mobileNumber: mobileNumber,
      addressOne: addressOne,
      addressTwo: addressTwo,
      city: city,
      state: state,
      zipcode: zipcode,
      website: website
		});
		await newUser.save()
		.then(async (savedUser) => {
      const newOTP = new OTP({
        email: savedUser.email, 
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
          res.status(200).json({newUser: savedUser, msg: "Please verify your email."});
        })
      })
		})
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

exports.login = async (req, res) => {
	try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });
    
    if (!user.emailVerified) {
      return res.status(400).json({ msg: "Please verify your email." })
    }
    if (user.status === "inactive") {
      return res.status(400).json({ msg: "Your profile is inactive now. " })
    } else if (user.status === "decline") {
      return res.status(400).json({ msg: "Your profile is declined" })
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Password is incorrect." });
    
    const userInfo = {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      role: user.role, 
      level: user.level,
      avatar: user.avatar,
      companyName: user.companyName,
      phoneNumber: user.phoneNumber,
      mobileNumber: user.mobileNumber,
      addressOne: user.addressOne,
      addressTwo: user.addressTwo,
      city: user.city,
      state: user.state,
      zipcode: user.zipcode,
      website:  user.website, 
      status: user.status
    }
    const token = jwt.sign(userInfo, keys.secretOrKey, { expiresIn: '24h' });

    return res.status(200).json({ token: "Bearer " + token, msg: "You have logged in successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    const filteredUsers = users.filter((item) => item.role !== "SuperAdmin")
    let modifiedUsers = []
    for (let user of filteredUsers) {
      let tempUserInfo = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName, 
        level: user.level,
        role: user.role,
        companyName: user.companyName,
        emailVerified: user.emailVerified.toString(),
        status: user.status
      }
      modifiedUsers.push(tempUserInfo)
    }
    return res.status(200).send(modifiedUsers)

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.handleUserByadmin = async (req, res) => {
  try {
    const { email, status } = req.body
    User.findOneAndUpdate(
      {email: email},
      { $set: {status: status} },
      { new: true }
    ).then(async () => {
      let html = ""
      if (status === "active") {
        html = "Admin approved your profile. You can login in now"
      } else if (status === "inactive") {
        html = "Your profile is inactivated by Admin. Please contact with Admin."
      } else {
        html = "Your access is declined. Please contact with Admin"
      }
      const msg = {
        to: email,
        from: process.env.MAIL_FROM,
        subject: "Admin's approval",
        html: html
      }
      sgMail.send(msg)
      .then(() => {
        console.log("Approval Email Sent!")
        res.status(200).json({email: email, status: status});
      })
    })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.updateProfile = async (req, res) => {
  try {
    const { newProfile } = req.body
    await User.findByIdAndUpdate(newProfile._id, newProfile, {new: true})
    .then((newUser) => {
      const userInfo = {
        _id: newUser._id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        password: newUser.password,
        role: newUser.role, 
        level: newUser.level,
        avatar: newUser.avatar,
        companyName: newUser.companyName,
        phoneNumber: newUser.phoneNumber,
        mobileNumber: newUser.mobileNumber,
        addressOne: newUser.addressOne,
        addressTwo: newUser.addressTwo,
        city: newUser.city,
        state: newUser.state,
        zipcode: newUser.zipcode,
        website:  newUser.website, 
        status: newUser.status
      }
      const token = jwt.sign(userInfo, keys.secretOrKey, { expiresIn: '24h' });
      return res.status(200).send({msg: "Profile is udpated.", token: token})
    })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}