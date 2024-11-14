chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ copiedTexts: [] });
});

function logCopyText(copiedText) {
  chrome.storage.local.get("copiedTexts", (result) => {
    const texts = result.copiedTexts || [];
    if (!texts.includes(copiedText)) {
      texts.unshift(copiedText); // Add to the beginning of the array
      if (texts.length > 10) texts.pop(); // Limit to 10 entries
      chrome.storage.local.set({ copiedTexts: texts });
    }
  });
}

// Receive messages from content script and log copied text
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.copiedText) {
    logCopyText(message.copiedText);
  }
});
