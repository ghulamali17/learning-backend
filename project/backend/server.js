const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

// Connect to MongoDB
const MONGO_URI = "mongodb://127.0.0.1:27017/todo_app";
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
