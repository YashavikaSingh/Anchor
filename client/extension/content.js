// This script runs on YouTube pages and extracts video information

let currentVideoId = "";
let videoChangeInterval;

// Function to extract the current video ID from URL
function getVideoIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("v");
}

// Function to extract video details
function extractVideoDetails() {
  console.log("extractVideoDetails called");
  const videoId = getVideoIdFromUrl();

  // If no video ID or same as current, skip
  if (!videoId || videoId === currentVideoId) return;

  currentVideoId = videoId;

  // Get video title
  const titleElement = document.querySelector(
    "h1.title.style-scope.ytd-video-primary-info-renderer"
  );
  const title = titleElement ? titleElement.textContent.trim() : "";

  // Get video description
  const descriptionElement = document.querySelector(
    "div#description-inline-expander"
  );
  const description = descriptionElement
    ? descriptionElement.textContent.trim()
    : "";

  // Get channel name
  const channelElement = document.querySelector(
    "div#text-container.style-scope.ytd-channel-name a"
  );
  const channel = channelElement ? channelElement.textContent.trim() : "";

  // Get current timestamp
  const currentTime = document.querySelector(".ytp-time-current")
    ? document.querySelector(".ytp-time-current").textContent
    : "0:00";

  // Send data to background script
  chrome.runtime.sendMessage({
    action: "videoChanged",
    data: {
      videoId,
      title,
      description,
      channel,
      currentTime,
      url: window.location.href,
    },
  });
}

// Start monitoring for video changes
function startVideoMonitoring() {
  // Check immediately
  extractVideoDetails();

  // Then check periodically for changes
  videoChangeInterval = setInterval(extractVideoDetails, 2000);
}

// Listen for messages from popup or background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getVideoDetails") {
    extractVideoDetails();
    sendResponse({ success: true });
  }
});

// Initialize
startVideoMonitoring();

// Clean up when navigating away
window.addEventListener("beforeunload", () => {
  if (videoChangeInterval) {
    clearInterval(videoChangeInterval);
  }
});

chrome.action.onClicked.addListener((tab) => {
  console.log("Extension icon clicked");
  displayEmails();
});

async function getAuthToken() {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
        return;
      }
      resolve(token);
    });
  });
}

async function fetchEmails() {
  const token = await getAuthToken();
  const response = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=15",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  console.log("Email List:", data.messages);
  return data.messages;
}

async function fetchEmailDetails(messageId) {
  const token = await getAuthToken();
  const response = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  console.log("Email Details:", data);
  return data;
}

function parseEmailDetails(email) {
  const subject = email.payload.headers.find(
    (header) => header.name === "Subject"
  )?.value;
  const sender = email.payload.headers.find(
    (header) => header.name === "From"
  )?.value;
  const snippet = email.snippet;

  console.log(`Subject: ${subject}`);
  console.log(`Sender: ${sender}`);
  console.log(`Snippet: ${snippet}`);
}

async function displayEmails() {
  const messages = await fetchEmails();

  if (messages) {
    // Check if messages are fetched successfully
    for (const message of messages) {
      const details = await fetchEmailDetails(message.id);
      if (details) {
        // Check if details are fetched successfully
        parseEmailDetails(details);
      } else {
        console.error("Failed to fetch details for message:", message.id);
      }
    }
  } else {
    console.error("Failed to fetch messages.");
  }
}
