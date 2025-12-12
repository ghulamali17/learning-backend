const mongoose = require("mongoose");

const todoScheme = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Todo", todoScheme);
