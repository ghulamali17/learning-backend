const express = require("express");
const { connectionMangodb } = require("./connection/connection");
const userRouter = require("./routes/user");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectionMangodb("mongodb://localhost:27017/first");

app.use("/user", userRouter);
app.get("/", (req,res)=>{
    res.send("Welcome")
})


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
