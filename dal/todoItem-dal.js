const TodoItemModel = require("../models/TodoItem");
const uuid = require("uuid");

const createNewTodoItem = async (todoItem) => {
  console.log(" ---- dal --- createNewTodoItem ");
  try {
    const newTodoItem = new TodoItemModel({
      todoItemId: uuid.v4(),
      ...todoItem,
    });
    return await newTodoItem.save();
  } catch (error) {
    console.log("Error creating new todo item", error);
    throw error;
  }
};

const getTodoItemById = async (todoItemId) => {
  console.log(" ---- dal --- getTodoItemById ");
  try {
    return await TodoItemModel.findOne({
      todoItemId: todoItemId,
    }).select("-__v -_id");
  } catch (error) {
    console.log("Error getting todo item", error);
    throw error;
  }
};

const updateTodoItem = async (todoItemId, newTodoItemDetails) => {
  console.log(" ---- dal --- updateTodoItem ");
  console.log({ newTodoItemDetails });
  try {
    return await TodoItemModel.findOneAndUpdate(
      { todoItemId: todoItemId },
      newTodoItemDetails,
      { new: true }
    ).select("-__v -_id");
  } catch (error) {
    console.log("Error updating todo item", error);
    throw error;
  }
};

const deleteTodoItem = async (todoItemId) => {
  console.log(" ---- dal --- deleteTodoItem ");
  try {
    return await TodoItemModel.findOneAndDelete({
      todoItemId: todoItemId,
    });
  } catch (error) {
    console.log("Error deleting todo item", error);
    throw error;
  }
};

const getTodoItems = async (query = undefined) => {
  console.log(" ---- dal --- getTodoItems ");
  try {
    let filterObj = {};
    if (query) filterObj = { ...query };
    return await TodoItemModel.find(filterObj).select("-__v -_id");
  } catch (error) {
    console.log("Error getting todo items", error);
    throw error;
  }
};

module.exports = {
  createNewTodoItem,
  deleteTodoItem,
  getTodoItemById,
  getTodoItems,
  updateTodoItem,
};
