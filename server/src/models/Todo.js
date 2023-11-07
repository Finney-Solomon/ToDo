const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  // Add more Todo properties as needed
});

module.exports = mongoose.model("Todo", todoSchema);
