 // Get current Pacific Time
 const now = new Date();
    const pacificOffset = new Date().getTimezoneOffset() + 480; // Pacific Time is UTC-8
    const pacificNow = new Date(now.getTime() - pacificOffset * 60000);

    // Start date for the 12 Days of Christmas campaign (Pacific Time)
    const startDate = new Date(pacificNow.getFullYear(), 11, 4); // December 14th (Month is 0-based)

    // Calculate the number of days since the start of the campaign
    const dayDiff = Math.floor((pacificNow - startDate) / (1000 * 60 * 60 * 24));

    // Check if we are within the 12-day range
    if (dayDiff >= 0 && dayDiff < 12) {
        const campaignImage = document.getElementById('campaign-image');
        const campaignText = document.getElementById('campaign-text');

        // Update the content based on the current day
        campaignImage.src = campaignData[dayDiff].image;
        campaignText.textContent = campaignData[dayDiff].text;
    } else {
        // Default message when outside the campaign dates
        document.getElementById('campaign-container').innerHTML = `
            <p>The 12 Days of Christmas campaign starts on December 14th!</p>
        `;
    }
