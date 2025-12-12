const Todo = require("../model/Todo.js");

// get all todos

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json("something went wrong", error);
  }
};

// add a todo

const addTodo = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Txt is req" });

    const newTodo = new Todo({ text });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;

    const todo = await Todo.findById(id);

    todo.text = text;
    todo.completed = completed;

    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
