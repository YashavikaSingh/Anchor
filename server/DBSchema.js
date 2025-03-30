const mongoose = require("mongoose");

const UserInsightsSchema = new mongoose.Schema({
  dailySummary: {
    emailHighlights: [
      {
        from: String,
        subject: String,
        snippet: String,
        importance: String,
      },
    ],
    calendarSummary: String,
    youtubeSummary: String,
    browserSummary: String,
  },

  toDoSuggestions: [String],

  focusModeRecommendations: [String],

  timeBlockSuggestions: [
    {
      start: Date,
      end: Date,
      purpose: String,
    },
  ],

  distractionAlerts: [String],

  emailActions: [
    {
      subject: String,
      action: String,
    },
  ],

  websiteCategories: {
    work: [String],
    entertainment: [String],
    social: [String],
    learning: [String],
  },

  goalTracking: {
    learningProgress: String,
    focusScore: String, // Change to Number if needed
    nudge: String,
  },

  naturalLanguageInsights: {
    whatYouDidToday: String,
    howYouSpentTime: String,
    nextBestAction: String,
  },
});

module.exports = mongoose.model("UserInsights", UserInsightsSchema);
