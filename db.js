const mongoose = require("mongoose");
require('dotenv').config();
// Local MongoDB URL
const localURL = "mongodb://127.0.0.1:27017/myDB";
//const mongoURL = process.env.MONGODB_URL_LOCAL;
// Online MongoDB Atlas URL
const atlasURL = "mongodb+srv://tpraveen2200:Parshya1108@cluster0.kpbuffo.mongodb.net/myDB";
const mongoURL = process.env.MONGODB_URL;

//const activeURL = localURL;   // 👉 Use Local MongoDB
const activeURL = atlasURL;      // 👉 Use Online MongoDB (Atlas)



// Connect to MongoDB
mongoose.connect(activeURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`✔ MongoDB Connected Successfully (${activeURL === localURL ? "Local" : "Atlas"})`))
    .catch((err) => console.log("❌ Connection Error:", err));

// Event listeners
const db = mongoose.connection;

db.on("connected", () => {
    console.log("📡 Status: MongoDB is connected");
});

db.on("error", (err) => {
    console.log("⚠ Status: MongoDB connection error:", err);
});

db.on("disconnected", () => {
    console.log("🔌 Status: MongoDB is disconnected");
});

module.exports = mongoose;
