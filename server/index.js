// index.js
const express = require("express");
const mongoose = require("./src/configuration/database");
const userRoutes = require("./src/routes/userRoutes");
const todoRoutes = require("./src/routes/todoRoutes");
const authMiddleware = require("./src/middleware/authMiddleware");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/todo", authMiddleware, todoRoutes);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
