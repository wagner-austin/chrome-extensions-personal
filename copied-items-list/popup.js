document.addEventListener("DOMContentLoaded", () => {
  const copiedItemsContainer = document.getElementById("copiedItems");

  chrome.storage.local.get("copiedTexts", (result) => {
    const texts = result.copiedTexts || [];

    texts.forEach((text, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      
      const summaryDiv = document.createElement("div");
      summaryDiv.classList.add("summary");
      summaryDiv.textContent = text.length > 30 ? text.slice(0, 30) + "..." : text;
      itemDiv.appendChild(summaryDiv);

      itemDiv.addEventListener("click", () => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
      });

      copiedItemsContainer.appendChild(itemDiv);
    });
  });
});
