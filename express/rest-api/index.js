const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const port = 8000;

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;

  res.send(html);
});

app.listen(port, () => console.log("Server start at port " + port));

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id == id);
  return res.json(user);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.post("/api/users", (req, res) => {
  const data = req.body;
  const newUser = { ...data, id: users.length + 1 };

  users.push(newUser);

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error("Failed to write to file", err);
      return res
        .status(500)
        .send({ status: "Error", message: "Could not save user" });
    }
    res.send({ status: "Success", user: newUser });
  });
});

app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id == id);
  return res.send({ status: "Pending" });
});

app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id == id);
  return res.send({ status: "Pending" });
});
