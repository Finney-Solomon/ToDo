// userController.js
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const jwt = require("../configuration/jwt");

module.exports = {
  registerUser: async (req, res) => {
    console.log(req.body, "req");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      username,
      password,
      confirmPassword,
      firstName,
      lastName,
      phoneNumber,
    } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      // Check if the Password and Confirm Password are Same
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do Not Match" });
      }

      //Hashing the Password using BCRYPT
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const user = new User({
        username,
        firstName,
        lastName,
        phoneNumber,
        password: hashedPassword,
        confirmPassword: hashedPassword,
      });
      await user.save();

      const token = jwt.sign({ userId: user._id });
      const userDetails = await User.findById(user._id).select(
        "-password -confirmPassword"
      );

      res.status(201).json({ token, userDetails });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  loginUser: async (req, res) => {
    const { username, password } = req.body;

    try {
      // Find the user by username
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      // Verify the password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign({ userId: user._id });
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  getUserProfile: async (req, res) => {
    try {
      const user = await User.findById(req.userId).select("-password");
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};
