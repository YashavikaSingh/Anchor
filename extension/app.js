chrome.storage.sync.get(["authToken"], (result) => {
  const token = result.authToken;

  if (!token) {
    // If not logged in, redirect to login
    window.location.href = "login.html";
    return;
  }

  // Attach logout handler
  document.getElementById("logout-btn").addEventListener("click", () => {
    // Invalidate the token from Chrome's identity API
    chrome.identity.removeCachedAuthToken({ token }, () => {
      // Clear it from storage
      chrome.storage.sync.remove("authToken", () => {
        // Redirect to login page
        window.location.href = "login.html";
      });
    });
  });
});
