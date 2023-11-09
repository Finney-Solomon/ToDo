// todoRoutes.js
const express = require("express");
const todoController = require("../controllers/todoController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/selectedTodo", todoController.getTodo);
router.get("/titleList", todoController.getTodoTitleList);
router.post("/addNew", todoController.createTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
