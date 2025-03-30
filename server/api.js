const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const { getProductivityInsights } = require("./function");
const UserInsights = require("./DBSchema");

const app = express();
const port = 4000;

// MongoDB Connection String - Replace with your actual credentials
const DB_CONNECTION_STRING =
  "mongodb+srv://anchorTeam:Dv7D7azMAYvWKsqb@cluster0.pqgux6v.mongodb.net/youtube_tracker?retryWrites=true&w=majority";

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

const userTrackingSchema = new mongoose.Schema({
  userId: String,
  userGmail: [
    {
      id: String,
      labelIds: Array,
      deliveredTo: String,
      from: String,
      receivedvalue: String,
      subject: String,
      snippet: String,
    },
  ],
  userYoutube: [
    {
      videoId: String,
      title: String,
      description: String,
      channel: String,
      currentTime: String,
      url: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
  userCalendar: [
    {
      date: String,
      title: String,
      time: String,
      location: String,
    },
  ],
  userBrowserHistory: [
    {
      websiteLink: String,
      activeTime: String,
      newWebsiteLink: String,
      timestamp: Date,
    },
  ],
});

// ✅ Create the model
const UserTracking = mongoose.model("userTrackingData", userTrackingSchema);

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

app.post("/getLLMResponse", async (req, res) => {
  // const { userId } = req.body;
  const userId = "user_12345";

  if (!userId) {
    return res.status(400).json({ error: "Missing userId in request body." });
  }

  try {
    // Fetch user tracking data from MongoDB
    const userData = await UserTracking.findOne({ userId });

    if (!userData) {
      return res.status(404).json({ error: "User data not found." });
    }

    // Send data to Gemini
    const insights = await getProductivityInsights(userData.toObject());

    UserInsights.create(insights)
      .then((doc) => {
        console.log("✅ Data saved:", doc);
        return doc;
      })
      .catch((err) => {
        console.error("❌ Error saving data:", err);
      });
  } catch (error) {
    console.error("Error fetching insights:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getRecco", async (req, res) => {
  // const { userId } = req.body;
  const userId = "user_12345";

  if (!userId) {
    return res.status(400).json({ error: "Missing userId in request body." });
  }

  try {
    // Fetch user tracking data from MongoDB
    const userData = await UserInsights.findOne({ userId });

    if (!userData) {
      return res.status(404).json({ error: "User data not found." });
    }

    return userData;
  } catch (error) {
    console.error("Error fetching insights:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Helper function to upsert by userId
async function upsertData(userId, update) {
  return await UserTracking.findOneAndUpdate(
    { userId },
    { $push: update },
    { new: true, upsert: true }
  );
}

// 📩 Gmail
app.post("/tracking/gmail", async (req, res) => {
  const { userId, data } = req.body;
  try {
    const result = await upsertData(userId, { userGmail: data });
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 📺 YouTube
app.post("/tracking/youtube", async (req, res) => {
  const { userId, data } = req.body;
  try {
    const result = await upsertData(userId, { userYoutube: data });
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 📅 Calendar
app.post("/tracking/calendar", async (req, res) => {
  const { userId, data } = req.body;
  try {
    const result = await upsertData(userId, { userCalendar: data });
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 🌐 Browser History
app.post("/tracking/browser", async (req, res) => {
  const { userId, data } = req.body;
  try {
    const result = await upsertData(userId, { userBrowserHistory: data });
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
