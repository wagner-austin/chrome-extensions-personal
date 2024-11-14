document.getElementById("openKeep").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://keep.google.com/" });
});
