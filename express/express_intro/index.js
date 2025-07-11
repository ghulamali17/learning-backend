const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from Home Page");
});

app.get("/about", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`Hello from About Page! Hey ${name}`);
});


app.listen(8000, () => console.log("Server running on 8000 port"));
