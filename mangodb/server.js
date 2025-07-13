const express = require("express");
const mongoose = require("mongoose");
const { connection } = require("mongoose");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection
mongoose
  .connect("mongodb://localhost:27017/first")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("Connection error:", err));

//schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  jobTitle: { type: String },
  gender: { type: String },
});

// model
const User = mongoose.model("User", userSchema);

// add user
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// get users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// get users in browser
app.get("/users-html", async (req, res) => {
  const users = await User.find();
  const html = `
    <h1>User List</h1>
    <ul>
      ${users.map((user) => `<li>${user.firstName}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// find by id
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.send(user);
});

// patched
app.patch("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    lastName: "Mushtaq",
  });
  return res.send(user);
});

// delete
app.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
