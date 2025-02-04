function replaceAds() {
  const ads = document.querySelectorAll("iframe, .ad, .banner-ad");

  ads.forEach((ad) => {
    if (!ad) return; // Prevent errors if ad elements don't exist

    const replacement = document.createElement("div");
    replacement.classList.add("adfriend-replacement");
    replacement.innerHTML = `
      <div style="padding: 20px; background: #f4f4f4; border-radius: 5px;">
        <h3>Stay Positive! 🌟</h3>
        <p>"Success is not the key to happiness. Happiness is the key to success."</p>
      </div>
    `;

    ad.replaceWith(replacement);
  });
}

// Ensure the script executes at the right time
if (document.readyState === "complete") {
  replaceAds();
} else {
  document.addEventListener("DOMContentLoaded", replaceAds);
}
