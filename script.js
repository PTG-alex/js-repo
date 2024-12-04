const campaignData = [
    { image: 'https://www.ptglab.com/media/zwvp2x3y/dec-14.png', text: 'Day 1: Special Offer on Gifts!' },
    { image: 'https://www.ptglab.com/media/vtwd1roq/dec-15.png', text: 'Day 2: Save on all Orders!' },
    { image: 'https://www.ptglab.com/media/l0ydg4te/dec-16.png', text: 'Day 3: Free Shipping Today!' },
    { image: 'https://www.ptglab.com/media/3mynkb3h/dec-17.png', text: 'Day 4: Exclusive Christmas Deals!' },
    { image: 'https://www.ptglab.com/media/yzlpk3ln/dec-18.png', text: 'Day 5: Buy 1 Get 1 Free!' },
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

// Set the campaign start and end dates
const startDate = new Date(2024, 11, 3); // Start date (year, month - 1, day)
const endDate = new Date(startDate.getTime() + 12 * 24 * 60 * 60 * 1000); // End date (12 days later)

// Select DOM elements
const campaignImage = document.getElementById('campaign-image');
const campaignText = document.getElementById('campaign-text');

// Determine if we are before, during, or after the campaign
if (pacificNow < startDate) {
    // Before the campaign
    campaignImage.src = 'https://via.placeholder.com/600x400?text=Coming+Soon'; // Replace with your "Coming Soon" image URL
    campaignImage.alt = 'Placeholder image for coming soon';
    campaignText.textContent = 'Get ready! The 12 Days of Christmas campaign is coming soon!';
} else if (pacificNow >= startDate && pacificNow < endDate) {
    // During the campaign
    const dayDiff = Math.floor((pacificNow - startDate) / (1000 * 60 * 60 * 24));
    campaignImage.src = campaignData[dayDiff].image;
    campaignImage.alt = `Image for ${campaignData[dayDiff].text}`;
    campaignText.textContent = campaignData[dayDiff].text;
} else {
    // After the campaign
    campaignImage.src = 'https://via.placeholder.com/600x400?text=Thank+You'; // Replace with your "Thank You" or "Campaign Ended" image URL
    campaignImage.alt = 'Placeholder image for campaign ended';
    campaignText.textContent = 'Thank you for participating in our 12 Days of Christmas campaign!';
}
