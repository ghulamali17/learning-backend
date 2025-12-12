const mongoose = require("mongoose");

// Connection
async function connectionMangodb(url) {
  return mongoose
    .connect("mongodb://localhost:27017/first")
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.log("Connection error:", err));
}
module.exports={connectionMangodb}