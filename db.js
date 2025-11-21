const mongoose = require("mongoose");

// MongoDB URL
const url = "mongodb://127.0.0.1:27017/myDB";

// Connect to MongoDB
mongoose.connect(url)
    .then(() => console.log("✔️ MongoDB Connected Successfully"))
    .catch((err) => console.log("❌ Connection Error:", err));

// Event listeners
const db = mongoose.connection;

db.on("connected", () => {
    console.log("📡 Status: MongoDB is connected");
});

db.on("error", (err) => {
    console.log("⚠️ Status: MongoDB connection error:", err);
});

db.on("disconnected", () => {
    console.log("🔌 Status: MongoDB is disconnected");
});

// Export Mongoose
module.exports = mongoose;
