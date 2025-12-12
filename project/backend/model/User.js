const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,    // FIXED
    },
    password: {
      type: String,
      required: true,    // FIXED
    }
  },
  {
    timestamps: true      // FIXED
  }
);

module.exports = mongoose.model("User", userSchema);
