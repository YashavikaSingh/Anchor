chrome.storage.sync.get(["authToken"], (result) => {
  if (result.authToken) {
    window.location.href = "app.html";
  } else {
    document.getElementById("login-btn").style.display = "block";
  }
});

document.getElementById("login-btn").addEventListener("click", () => {
  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }
    chrome.storage.sync.set({ authToken: token }, () => {
      window.location.href = "app.html";
    });
  });
});
