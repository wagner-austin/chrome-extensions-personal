chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ copiedTexts: [] });
});

async function logCopyText() {
  const copiedText = await navigator.clipboard.readText();
  chrome.storage.local.get("copiedTexts", (result) => {
    const texts = result.copiedTexts || [];
    if (!texts.includes(copiedText)) {
      texts.unshift(copiedText); // Add to the beginning of the array
      if (texts.length > 10) texts.pop(); // Limit to 10 entries
      chrome.storage.local.set({ copiedTexts: texts });
    }
  });
}

// Listen to copy events to log copied text
chrome.commands.onCommand.addListener((command) => {
  if (command === "log_copy_text") logCopyText();
});
