document.getElementById("login-btn").addEventListener("click", () => {
  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }
    chrome.storage.sync.set({ authToken: token }, () => {
      window.location.href = "app.html";
    });

    console.log("Got token:", token);
  });
});
