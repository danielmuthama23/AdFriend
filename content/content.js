// Function to replace ads based on user selection
function replaceAds(option) {
    console.log("Replacing ads with:", option); // Debugging log
    const ads = document.querySelectorAll("iframe, .ad, .banner-ad");

    ads.forEach((ad) => {
        if (!ad) return;

        const replacement = document.createElement("div");
        replacement.classList.add("adfriend-replacement");

        if (option === "quotes") {
            replacement.innerHTML = `
                <div style="padding: 20px; background: #f4f4f4; border-radius: 5px;">
                    <h3>Stay Inspired! 🌟</h3>
                    <p>"Success is not the key to happiness. Happiness is the key to success."</p>
                </div>
            `;
        } else if (option === "reminders") {
            replacement.innerHTML = `
                <div style="padding: 20px; background: #eaf7f1; border-radius: 5px;">
                    <h3>Activity Reminder! 💪</h3>
                    <p>Time for a stretch! Have you done your 5-minute workout today?</p>
                </div>
            `;
        } else {
            console.error("Invalid option:", option);
        }

        ad.replaceWith(replacement);
    });
}

// Load stored user preference on page load
chrome.storage.sync.get(["mode"], function (result) {
    const userMode = result.mode || "quotes"; // Default to "quotes"
    console.log("Loaded stored mode:", userMode);
    replaceAds(userMode);
});

// Listen for storage changes (updates ads in real-time)
chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (namespace === "sync" && changes.mode) {
        console.log("Mode changed:", changes.mode.newValue);
        replaceAds(changes.mode.newValue);
    }
});
