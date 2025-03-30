// Popup script that handles the extension UI

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const analyzeBtn = document.getElementById('analyze-btn');
    const refreshBtn = document.getElementById('refresh-btn');
    const loadingElement = document.getElementById('loading');
    const videoDetailsElement = document.getElementById('video-details');
    const videoTitleElement = document.getElementById('video-title');
    const videoChannelElement = document.getElementById('video-channel');
    const analysisContainer = document.getElementById('analysis-container');
    const analysisContent = document.getElementById('analysis-content');
    const errorContainer = document.getElementById('error-container');
    const errorMessage = document.getElementById('error-message');
    const noVideoElement = document.getElementById('no-video');
    
    // Initialize popup
    initPopup();
    
    // Button event listeners
    analyzeBtn.addEventListener('click', analyzeCurrentVideo);
    refreshBtn.addEventListener('click', analyzeCurrentVideo);
    
    // Function to initialize the popup with current state
    function initPopup() {
        console.log("initPopup called");
      // Show loading state
      setLoading(true);
      
      // Get current video details from background script
      chrome.runtime.sendMessage({ action: 'getCurrentVideo' }, (response) => {
        setLoading(false);
        
        if (response && response.data) {
          // Update UI with video info
          updateVideoInfo(response.data);
          
          // Check if analysis exists
          chrome.storage.local.get('lastAnalysis', (data) => {
            if (data.lastAnalysis) {
              showAnalysis(data.lastAnalysis);
              analyzeBtn.classList.add('hidden');
              refreshBtn.classList.remove('hidden');
            } else {
              analysisContainer.classList.add('hidden');
              analyzeBtn.classList.remove('hidden');
              refreshBtn.classList.add('hidden');
            }
          });
        } else {
          // No video detected
          noVideoElement.classList.remove('hidden');
          videoDetailsElement.classList.add('hidden');
          analysisContainer.classList.add('hidden');
          analyzeBtn.disabled = true;
        }
      });
    }
    
    // Function to analyze the current video
    function analyzeCurrentVideo() {
        console.log("analyzeCurrentVideo called"); 
      // Clear previous analysis
      resetUI();
      
      // Show loading state
      setLoading(true);
      
      // Request analysis from background script
      chrome.runtime.sendMessage({ action: 'analyzeVideo' }, (response) => {
        setLoading(false);
        
        if (response && response.success) {
          // Show analysis results
          showAnalysis(response.analysis);
          
          // Update buttons
          analyzeBtn.classList.add('hidden');
          refreshBtn.classList.remove('hidden');
        } else {
          // Show error
          showError(response?.error || 'Failed to analyze video. Please try again.');
        }
      });
    }
    
    // Function to update video information in the UI
    function updateVideoInfo(videoData) {
      videoTitleElement.textContent = videoData.title;
      videoChannelElement.textContent = videoData.channel;
      videoDetailsElement.classList.remove('hidden');
      noVideoElement.classList.add('hidden');
    }
    
    // Function to display analysis content
    function showAnalysis(analysisText) {
      analysisContent.textContent = analysisText;
      analysisContainer.classList.remove('hidden');
    }
    
    // Function to show error message
    function showError(message) {
      errorMessage.textContent = message;
      errorContainer.classList.remove('hidden');
    }
    
    // Function to reset UI elements
    function resetUI() {
      errorContainer.classList.add('hidden');
      analysisContainer.classList.add('hidden');
    }
    
    // Function to toggle loading state
    function setLoading(isLoading) {
      if (isLoading) {
        loadingElement.classList.remove('hidden');
        analyzeBtn.disabled = true;
        refreshBtn.disabled = true;
      } else {
        loadingElement.classList.add('hidden');
        analyzeBtn.disabled = false;
        refreshBtn.disabled = false;
      }
    }
  });