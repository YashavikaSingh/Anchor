import React, { useState, useEffect } from "react";
import "./popup.css";

interface VideoData {
  title: string;
  channel: string;
}

const Popup: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [analysis, setAnalysis] = useState("");
  const [error, setError] = useState("");

  // If an analysis already exists, we show the refresh button instead of the analyze button.
  const [hasAnalysis, setHasAnalysis] = useState(false);

  // Function to initialize the popup
  const initPopup = () => {
    console.log("initPopup called");
    setLoading(true);

    // Check if we have access to chrome.runtime
    if (!chrome.runtime?.id) {
      console.error("Chrome runtime not available");
      setLoading(false);
      setError("Extension context not available. Please reload the extension.");
      return;
    }

    // Add error handling for the message passing
    try {
      chrome.runtime.sendMessage({ action: "getCurrentVideo" }, (response) => {
        setLoading(false);
        if (chrome.runtime.lastError) {
          console.error("Chrome runtime error:", chrome.runtime.lastError);
          setError("Failed to connect to extension. Please reload the page.");
          return;
        }

        if (response && response.data) {
          setVideoData(response.data);
          // Check if an analysis exists in storage
          chrome.storage.local.get("lastAnalysis", (data) => {
            if (chrome.runtime.lastError) {
              console.error("Storage error:", chrome.runtime.lastError);
              return;
            }
            if (data.lastAnalysis) {
              setAnalysis(data.lastAnalysis);
              setHasAnalysis(true);
            } else {
              setAnalysis("");
              setHasAnalysis(false);
            }
          });
        } else {
          // No video detected
          setVideoData(null);
        }
      });
    } catch (error) {
      console.error("Error in initPopup:", error);
      setLoading(false);
      setError("Failed to initialize popup. Please try again.");
    }
  };

  // Function to analyze the current video
  const analyzeCurrentVideo = () => {
    console.log("analyzeCurrentVideo called");
    // Clear previous analysis and errors
    setError("");
    setAnalysis("");
    setHasAnalysis(false);
    setLoading(true);
    chrome.runtime.sendMessage({ action: "analyzeVideo" }, (response) => {
      setLoading(false);
      if (response && response.success) {
        setAnalysis(response.analysis);
        setHasAnalysis(true);
      } else {
        setError(
          response?.error || "Failed to analyze video. Please try again."
        );
      }
    });
  };

  // Initialize the popup when the component mounts
  useEffect(() => {
    initPopup();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>YouTube LLM Insights</h1>
      </header>

      <div id="loading" className={loading ? "" : "hidden"}>
        <div className="spinner"></div>
        <p>Analyzing video content...</p>
      </div>

      <div id="video-info">
        {videoData ? (
          <div className="video-details" id="video-details">
            <h2 id="video-title">{videoData.title}</h2>
            <p id="video-channel">{videoData.channel}</p>
          </div>
        ) : (
          <div id="no-video">
            <p>
              No YouTube video detected. Please navigate to a YouTube video.
            </p>
          </div>
        )}

        {error && (
          <div className="error-message" id="error-container">
            <p id="error-message">{error}</p>
          </div>
        )}
      </div>

      {analysis && (
        <div id="analysis-container">
          <h3>AI Analysis</h3>
          <div id="analysis-content">{analysis}</div>
        </div>
      )}

      <div className="controls">
        {hasAnalysis ? (
          <button
            id="refresh-btn"
            onClick={analyzeCurrentVideo}
            disabled={loading}
          >
            Refresh Analysis
          </button>
        ) : (
          <button
            id="analyze-btn"
            onClick={analyzeCurrentVideo}
            disabled={loading || !videoData}
          >
            Analyze Current Video
          </button>
        )}
      </div>

      <footer>
        <p className="small">
          This extension uses AI to analyze YouTube content
        </p>
      </footer>
    </div>
  );
};

export default Popup;
