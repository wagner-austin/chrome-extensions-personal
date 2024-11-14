chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "https://keep.google.com/" });
});
