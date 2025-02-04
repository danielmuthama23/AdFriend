document.getElementById("quotes").addEventListener("click", function () {
  chrome.storage.sync.set({ mode: "quotes" });
});

document.getElementById("reminders").addEventListener("click", function () {
  chrome.storage.sync.set({ mode: "reminders" });
});
