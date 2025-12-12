const mongoose = require("mongoose");

async function connectionMangodb(url) {
  mongoose
    .connect(url)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.log("Connection error:", err));
}
module.exports = { connectionMangodb };
