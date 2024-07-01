const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  firstName: {
    type: String,
    required: true, 
  },
  lastName: {
    type: String,
    required: true, 
  },
  password: { 
    type: String, 
    required: true, 
  },
  role: {
    type: String, 
    required: true,
  },
  level: {
    type: String, 
    required: true,
  },
  avatar: {
    type: String, 
    default: ""
  }, 
  companyName: {
    type: String,
    required: true, 
  },
  phoneNumber: {
    type: String,
    required: true, 
  },
  mobileNumber: {
    type: String,
    required: true, 
  },
  addressOne: {
    type: String,
    required: true, 
  },
  addressTwo: {
    type: String,
    required: true, 
  },
  city: {
    type: String,
    required: true, 
  },
  state: {
    type: String,
    required: true, 
  },
  zipcode: {
    type: String,
    required: true, 
  },
  website: {
    type: String,
  },
  status: {
    type: String, 
    default: "inactive"
  }, 
  emailVerified: {
    type: Boolean, 
    default: false
  }, 
  registerAt: {
    type: Date, 
    default: Date.now
  },
  updateAt: {
    type: Date, 
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", userSchema);
