// This script runs on YouTube pages and extracts video information

let currentVideoId = '';
let videoChangeInterval;

// Function to extract the current video ID from URL
function getVideoIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('v');
}

// Function to extract video details
function extractVideoDetails() {
  console.log("extractVideoDetails called");
  const videoId = getVideoIdFromUrl();

  // If no video ID or same as current, skip
  if (!videoId || videoId === currentVideoId) return;

  currentVideoId = videoId;

  // Get video title
  const titleElement = document.querySelector('h1.title.style-scope.ytd-video-primary-info-renderer');
  const title = titleElement ? titleElement.textContent.trim() : '';

  // Get video description
  const descriptionElement = document.querySelector('div#description-inline-expander');
  const description = descriptionElement ? descriptionElement.textContent.trim() : '';

  // Get channel name
  const channelElement = document.querySelector('div#text-container.style-scope.ytd-channel-name a');
  const channel = channelElement ? channelElement.textContent.trim() : '';

  // Get current timestamp
  const currentTime = document.querySelector('.ytp-time-current') ?
    document.querySelector('.ytp-time-current').textContent : '0:00';

  // Send data to background script
  chrome.runtime.sendMessage({
    action: 'videoChanged',
    data: {
      videoId,
      title,
      description,
      channel,
      currentTime,
      url: window.location.href
    }
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
  if (message.action === 'getVideoDetails') {
    extractVideoDetails();
    sendResponse({ success: true });
  }
});

// Initialize
startVideoMonitoring();

// Clean up when navigating away
window.addEventListener('beforeunload', () => {
  if (videoChangeInterval) {
    clearInterval(videoChangeInterval);
  }
});