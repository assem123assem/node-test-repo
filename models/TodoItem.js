const mongoose = require("mongoose");

const todoItemSchema = new mongoose.Schema({
  todoItemId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const TodoItem = mongoose.model("TodoItem", todoItemSchema);
module.exports = TodoItem;
