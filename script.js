
    const campaignData = [
        { image: 'https://www.ptglab.com/media/lvrnuu5d/if-3.jpg', text: 'Day 1: Special Offer on Gifts!' },
        { image: 'https://www.ptglab.com/media/ff0pxo3y/if-1.jpg', text: 'Day 2: Save on all Orders!' },
        { image: 'https://www.ptglab.com/media/hgbhu3i5/wb-2.jpg', text: 'Day 3: Free Shipping Today!' },
        { image: 'day4.jpg', text: 'Day 4: Exclusive Christmas Deals!' },
        { image: 'day5.jpg', text: 'Day 5: Buy 1 Get 1 Free!' },
        { image: 'day6.jpg', text: 'Day 6: Discounts on Bestsellers!' },
        { image: 'day7.jpg', text: 'Day 7: Gifts for Everyone!' },
        { image: 'day8.jpg', text: 'Day 8: Shop More, Save More!' },
        { image: 'day9.jpg', text: 'Day 9: Limited Time Christmas Sale!' },
        { image: 'day10.jpg', text: 'Day 10: Early Bird Specials!' },
        { image: 'day11.jpg', text: 'Day 11: Countdown to Christmas!' },
        { image: 'day12.jpg', text: 'Day 12: Final Christmas Offer!' }
    ];

    // Get current Pacific Time
    const now = new Date();
    const pacificOffset = new Date().getTimezoneOffset() + 480; // Pacific Time is UTC-8
    const pacificNow = new Date(now.getTime() - pacificOffset * 60000);

    // Set the campaign start date (e.g., today, Pacific Time)
    const startDate = new Date(2024, 10, 28); // Set this to your campaign start date (year, month - 1, day)
    
    // Calculate the number of days since the start of the campaign
    const dayDiff = Math.floor((pacificNow - startDate) / (1000 * 60 * 60 * 24));

    // Check if we are within the 12-day range
    if (dayDiff >= 0 && dayDiff < 12) {
        const campaignImage = document.getElementById('campaign-image');
        const campaignText = document.getElementById('campaign-text');

        // Update the content based on the current day
        campaignImage.src = campaignData[dayDiff].image;
        campaignImage.alt = `Image for ${campaignData[dayDiff].text}`;
        campaignText.textContent = campaignData[dayDiff].text;
    } else {
        // Default message when outside the campaign dates
        document.getElementById('campaign-container').innerHTML = `
            <p>The 12 Days of Christmas campaign starts soon! Check back later!</p>
        `;
    }

