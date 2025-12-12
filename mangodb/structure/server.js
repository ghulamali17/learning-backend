const express = require("express");
const userRouter = require("./routes/user");
const { connectionMangodb } = require("./connection/connection");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectionMangodb("mongodb://localhost:27017/first");

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
