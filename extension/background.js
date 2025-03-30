chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});

// chrome.identity.getAuthToken({ interactive: true }, function (token) {
//   fetch("https://www.googleapis.com/gmail/v1/users/me/messages", {
//     headers: { Authorization: `Bearer ${token}` },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// });

// background.js
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
