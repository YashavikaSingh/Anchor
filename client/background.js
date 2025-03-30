// Background script that handles Gemini API calls

// Store the current video data
let currentVideoData = null;
let lastAnalysisId = null;

// Config for Gemini API
const LLM_API_CONFIG = {
  // Replace with your actual API key
  apiKey: 'AIzaSyCzqIH2FvDdAyrJ8SZdb_fDjK4My6MqBnk',
  model: 'models/gemini-1.5-pro'  // Use your preferred Gemini model
};

// API Endpoint for saving video data
const API_ENDPOINT = 'http://localhost:3000/videos'; // Replace with your actual API endpoint

// Listen for messages from content script or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'videoChanged') {
    // Store new video data
    currentVideoData = message.data;

    // Reset analysis since video changed
    lastAnalysisId = null;

    // Store in local storage
    chrome.storage.local.set({ currentVideoData });

    // Save video data to MongoDB via API
    saveVideoDataToDB(currentVideoData);

    // Send response
    sendResponse({ success: true });
    return true;
  }

  if (message.action === 'getCurrentVideo') {
    // Respond with current video data
    sendResponse({ data: currentVideoData });
    return true;
  }

  if (message.action === 'analyzeVideo') {
    // Check if we have video data
    if (!currentVideoData) {
      sendResponse({
        success: false,
        error: 'No video data available. Please make sure you are on a YouTube video page.'
      });
      return true;
    }

    // Check if we already analyzed this video
    if (lastAnalysisId === currentVideoData.videoId) {
      // Get the existing analysis from storage
      chrome.storage.local.get('lastAnalysis', (data) => {
        if (data.lastAnalysis) {
          sendResponse({
            success: true,
            cached: true,
            analysis: data.lastAnalysis
          });
        } else {
          // If not found in storage, perform new analysis
          performAnalysis(currentVideoData, sendResponse);
        }
      });
    } else {
      // Perform new analysis
      performAnalysis(currentVideoData, sendResponse);
    }

    return true; // Indicates we'll respond asynchronously
  }
});

// Function to save video data to MongoDB via API
async function saveVideoDataToDB(videoData) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(videoData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Data saved to MongoDB:', result);
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
  }
}

// Function to call Gemini API and analyze video
async function performAnalysis(videoData, sendResponse) {
  try {
    // Construct prompt for Gemini
    const prompt = `
    I'm watching a YouTube video with the following details:

    Title: ${videoData.title}
    Channel: ${videoData.channel}
    Description: ${videoData.description}

    Please provide:
    1. A brief summary of what this video appears to be about
    2. Key points or topics likely covered
    3. Any interesting insights or questions I might consider while watching

    Keep your response concise and insightful.
    `;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/${LLM_API_CONFIG.model}:generateContent?key=${LLM_API_CONFIG.apiKey}`;

    // Make API request to Gemini
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500
        }
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();

    // Extract Gemini response
    // Check for proper response format and extract text
    if (result.candidates &&
      result.candidates[0] &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts[0]) {

      const analysis = result.candidates[0].content.parts[0].text;

      // Save analysis to storage
      lastAnalysisId = videoData.videoId;
      chrome.storage.local.set({
        lastAnalysis: analysis
      });

      // Send response back
      sendResponse({
        success: true,
        cached: false,
        analysis: analysis
      });
    } else {
      throw new Error("Unexpected response format from Gemini API");
    }

  } catch (error) {
    console.error('Error in Gemini analysis:', error);
    sendResponse({
      success: false,
      error: `Failed to analyze video: ${error.message}`
    });
  }
}