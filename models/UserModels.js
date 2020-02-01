const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    validator: [validator.isEmail, "Please provide a valid email."]
  },
  password: {
    type: String,
    required: [true, "Please provide a valid password"],
    minlength: 8
  },
  foodList: {
    type: [String] // List of unique _id's corresponding food entries
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;