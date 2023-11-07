const express = require("express");
const { check } = require("express-validator");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/register",
  [
    check("username").isLength({ min: 4 }),
    check("password").isLength({ min: 6 }),
  ],
  userController.registerUser
);

router.post("/login", userController.loginUser);

router.get("/profile", authMiddleware, userController.getUserProfile);

module.exports = router;
