// todoController.js
const Todo = require("../models/Todo");

module.exports = {
  getTodo: async (req, res) => {
    try {
      const todo = await Todo.findOne({ _id: req.body.payload });
      res.status(200).json({ success: true, todo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  getTodoTitleList: async (req, res) => {
    try {
      const todo = await Todo.find({ user: req.userId }, "title");

      res.status(200).json({ success: true, todo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  createTodo: async (req, res) => {
    const { title, description } = req.body.payload;

    try {
      const todo = new Todo({ user: req.userId, title, description });
      await todo.save();
      res.status(201).json({ success: true, todo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  updateTodo: async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body.payload;

    try {
      const todo = await Todo.findOne({ _id: id, user: req.userId });

      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      todo.title = title || todo.title;
      todo.description = description || todo.description;
      todo.completed = completed || todo.completed;

      await todo.save();
      res.status(200).json({ success: true, todo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  deleteTodo: async (req, res) => {
    const { id } = req.params;

    try {
      const todo = await Todo.findOne({ _id: id, user: req.userId });
     
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      await Todo.deleteOne({ _id: id });
      res.status(200).send({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};
