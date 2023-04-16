const todoItemDal = require("../dal/todoItem-dal");

const createNewTodoItem = async (todoItem) => {
  console.log(" ---- service --- createNewTodoItem ");
  try {
    return await todoItemDal.createNewTodoItem(todoItem);
  } catch (error) {
    console.log("Error creating new todo item", error);
    throw error;
  }
};

const getTodoItemById = async (todoItemId) => {
  console.log(" ---- service --- getTodoItemById ");
  try {
    return await todoItemDal.getTodoItemById(todoItemId);
  } catch (error) {
    console.log("Error getting todo item", error);
    throw error;
  }
};

const updateTodoItem = async (todoItemId, newTodoItemDetails) => {
  console.log(" ---- service --- updateTodoItem ");
  try {
    return await todoItemDal.updateTodoItem(todoItemId, newTodoItemDetails);
  } catch (error) {
    console.log("Error updating todo item", error);
    throw error;
  }
};

const deleteTodoItem = async (todoItemId) => {
  console.log(" ---- service --- deleteTodoItem ");
  try {
    await todoItemDal.deleteTodoItem(todoItemId);
  } catch (error) {
    console.log("Error deleting todo item", error);
    throw error;
  }
};

const getTodoItems = async () => {
  console.log(" ---- service --- getTodoItems ");
  try {
    return await todoItemDal.getTodoItems();
  } catch (error) {
    console.log("Error getting todo items", error);
    throw error;
  }
};

const getTodoItemsByUserId = async (userId) => {
  console.log(" ---- service --- getTodoItemsByUserId ");
  try {
    const query = { userId };
    return await todoItemDal.getTodoItems(query);
  } catch (error) {
    console.log("Error getting todo items by user id", error);
    throw error;
  }
};

module.exports = {
  createNewTodoItem,
  getTodoItemById,
  updateTodoItem,
  deleteTodoItem,
  getTodoItems,
  getTodoItemsByUserId,
};
