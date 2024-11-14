document.addEventListener("copy", () => {
  navigator.clipboard.readText().then((text) => {
    chrome.runtime.sendMessage({ copiedText: text });
  });
});
