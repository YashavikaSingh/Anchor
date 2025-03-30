const axios = require("axios");
require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

console.log(" process.env.GEMINI_API_KEY >>>", process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function getProductivityInsights(userData) {
  const prompt = `You are a productivity assistant. Based on the following user activity data (emails, YouTube history, calendar events, and browser history), return a detailed summary and suggestions in JSON format.

## GOALS:
- Summarize the user’s recent activity
- Identify productivity patterns or distractions
- Suggest smart to-do items or calendar blocks
- Recommend focus improvements
- Classify websites and YouTube usage
- Highlight important emails
- Provide behavioral insights and nudges

## INPUT (user activity data):
${JSON.stringify(userData, null, 2)}

## OUTPUT FORMAT (JSON):
{
  "dailySummary": {
    "emailHighlights": [ ... ],
    "calendarSummary": "...",
    "youtubeSummary": "...",
    "browserSummary": "..."
  },
  "toDoSuggestions": [ "..." ],
  "focusModeRecommendations": [ "..." ],
  "timeBlockSuggestions": [ { "start": "...", "end": "...", "purpose": "..." } ],
  "distractionAlerts": [ "..." ],
  "emailActions": [ { "subject": "...", "action": "Reply | Archive | Mark as important" } ],
  "websiteCategories": {
    "work": [...],
    "entertainment": [...],
    "social": [...],
    "learning": [...]
  },
  "goalTracking": {
    "learningProgress": "...",
    "focusScore": "1-10",
    "nudge": "..."
  },
  "naturalLanguageInsights": {
    "whatYouDidToday": "...",
    "howYouSpentTime": "...",
    "nextBestAction": "..."
  }
}
Make sure the output is clean, JSON-valid, and easy to parse.
`;
  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    const response = result.text;

    // console.log("response >>>", typeof response);

    // Clean up the weird prefix/suffix
    formattedResponse = response
      .replace(/```json/, "") // Remove leading 'string ```json'
      .replace(/```$/, "") // Remove trailing ```
      .trim();

    // console.log("formattedResponse >>>", formattedResponse);

    const jsonResponse = JSON.parse(formattedResponse);

    // console.log("jsonResponse >>>", typeof jsonResponse, jsonResponse);

    return jsonResponse;
  } catch (err) {
    console.error("Gemini API Error:", err);
    return { error: "Failed to generate insights" };
  }
}

module.exports = { getProductivityInsights };
