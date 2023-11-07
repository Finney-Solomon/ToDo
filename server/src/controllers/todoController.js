// todoController.js
const Todo = require("../models/Todo");

module.exports = {
  getTodos: async (req, res) => {
    try {
      const todos = await Todo.find({ user: req.userId });
      res.status(200).json(todos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  createTodo: async (req, res) => {
    const { title, description } = req.body;

    try {
      const todo = new Todo({ user: req.userId, title, description });
      await todo.save();
      res.status(201).json(todo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  updateTodo: async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
      const todo = await Todo.findOne({ _id: id, user: req.userId });

      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      todo.title = title || todo.title;
      todo.description = description || todo.description;
      todo.completed = completed || todo.completed;

      await todo.save();
      res.status(200).json(todo);
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

      await todo.remove();
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};
