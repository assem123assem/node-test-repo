const todoItemService = require("../services/todoItem-service");

module.exports.createTodoItem = async (req, res) => {
  console.log(" ---- controller --- createTodoItem ");
  const todoItem = await todoItemService.createNewTodoItem(req.body);
  res.status(201).json(todoItem);
};

module.exports.getTodoItemById = async (req, res) => {
  console.log(" ---- controller --- getTodoItemById ");
  const todoItemId = req.params.todoItemId;
  const todoItem = await todoItemService.getTodoItemById(todoItemId);
  res.json(todoItem);
};

module.exports.updateTodoItem = async (req, res) => {
  console.log(" ---- controller --- updateTodoItem ");
  const todoItem = await todoItemService.updateTodoItem(
    req.params.todoItemId,
    req.body
  );
  res.json(todoItem);
};

module.exports.deleteTodoItemById = async (req, res) => {
  console.log(" ---- controller --- deleteTodoItemById ");
  const todoItemId = req.params.todoItemId;
  const todoItem = await todoItemService.deleteTodoItem(todoItemId);
  res.status(204).json(todoItem);
};
