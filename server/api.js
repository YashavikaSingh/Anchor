const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const app = express();
const port = 3000;

// MongoDB Connection String - Replace with your actual credentials
const DB_CONNECTION_STRING =
  "mongodb+srv://anchorTeam:Dv7D7azMAYvWKsqb@cluster0.pqgux6v.mongodb.net/youtube_tracker?retryWrites=true&w=majority";

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a schema for the video data
const videoSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  description: String,
  channel: String,
  currentTime: String,
  url: String,
  timestamp: { type: Date, default: Date.now },
});

// Create a model based on the schema
const Video = mongoose.model("Video", videoSchema, "tab_data"); // Ensure collection name is 'tab_data'

// Connect to MongoDB
mongoose
  .connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

// API endpoint to save video data
app.post("/videos", async (req, res) => {
  try {
    const videoData = req.body;
    const video = new Video(videoData);
    await video.save();
    console.log("Video data saved:", videoData);
    res
      .status(201)
      .json({ message: "Video data saved successfully", videoId: video._id });
  } catch (error) {
    console.error("Error saving video data:", error);
    res.status(500).json({ error: "Failed to save video data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
