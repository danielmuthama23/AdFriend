document.addEventListener("click", function (event) {
    const validModes = ["quotes", "reminders"];

    if (validModes.includes(event.target.id)) {
        const mode = event.target.id;
        const message = mode === "quotes" 
            ? "✅ Motivational Quotes selected!" 
            : "✅ Activity Reminders selected!";

        // Save user selection
        chrome.storage.sync.set({ mode }, function () {
            if (chrome.runtime.lastError) {
                console.error("Error saving mode:", chrome.runtime.lastError);
                alert("❌ Failed to save your preference. Please try again.");
            } else {
                console.log("Mode saved:", mode);
                alert(message);
            }
        });
    }
});
