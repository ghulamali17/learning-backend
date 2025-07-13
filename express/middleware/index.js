const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

// Built-in middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Custom middleware (logging)
app.use((req, res, next) => {
  console.log("MiddleWare 1st");
  next();
});
app.use((req, res, next) => {
  console.log("MiddleWare 2nd");
  next();
});

// Routes
app.get("/users", (req, res) => {
  return res.json(users);
});

// 404 middleware
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(port, () => {
  console.log("Server started at port " + port);
});
