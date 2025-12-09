    const campaignData = [
        { 
        image1: 'https://www.ptglab.com/media/0gwiu0q1/12-days-2025-web-banner-day-1-resize-final.png',
        image2: 'https://www.ptglab.com/media/5ahhqi0l/12-days-2025-advent-day-1.png',
        text: 'On the first day of Christmas, you get your very own Mini Labcoat Pin with Alice the Alpaca on it! Don’t wait, this offer is only available today, December 14th, while supplies last'
    },
    { 
        image1: 'https://www.ptglab.com/media/hctjm0uv/12-days-2025-web-banner-day-2-resize-final.png',
        image2: 'https://www.ptglab.com/media/aarnvgqj/12-days-2025-advent-day-2.png', 
        text: 'On the second day of Christmas, a cozy prize is in sight. Win a portable projector to make every movie night just right. Available today only, December 15th, 2025.'
    },
    { 
        image1: 'https://www.ptglab.com/media/54jozgd1/12-days-2025-web-banner-day-3-resize-final.png',
        image2: 'https://www.ptglab.com/media/sxvjdc1f/12-days-2025-advent-day-3.png',
        text: 'On the third day of Christmas, we’re making spirits brighter. Enter now to win our Able AI sweater sticker. This offer is open today, December 16th, for a limited time and while supplies last.'
    },
    { 
        image1: 'https://www.ptglab.com/media/i55kxgft/12-days-2025-web-banner-day-4-resize-final.png',
        image2: 'https://www.ptglab.com/media/uiznerms/12-days-2025-advent-day-4.png',
        text: 'On the fourth day of Christmas, we’re fueling your holiday cheer. Make every morning brew-tiful with a new Nespresso Machine. This offer is available today, December 17th, only.' 
    },
    { 
        image1: 'https://www.ptglab.com/media/s2ynqd3x/12-days-2025-web-banner-day-5-resize-final.png',
        image2: 'https://www.ptglab.com/media/otjdcgxa/12-days-2025-advent-day-5.png',
        text: 'On the fifth day of Christmas, we’ve brewed up a special gift for you. Enter to win a custom Lab Coat Mug. Available today, December 18th, only.'
    },
    { 
        image1: 'https://www.ptglab.com/media/weqmkcpi/12-days-2025-web-banner-day-6-resize-final.png',
        image2: 'https://www.ptglab.com/media/5kpdhwaj/12-days-2025-advent-day-6.png',
        text: 'On the sixth day of Christmas, we’re zooming into the festivities. Enter to win a Mini Microscope. Available today, December 19th, while supplies last.'
    },
    { 
        image1: 'https://www.ptglab.com/media/3h2fvhpo/12-days-2025-web-banner-day-7-resize-final.png',
        image2: 'https://www.ptglab.com/media/quzco4sb/12-days-2025-advent-day-7.png',
        text: 'On the seventh day of Christmas, we’re turning up the cheer. Enter to win OpenFit Bone-Conducting Headphones. This offer is only available on December 20th, 2025.'
    },
    { 
        image1: 'https://www.ptglab.com/media/mv3p5uhk/12-days-2025-web-banner-day-8-resize-final.png',
        image2: 'https://www.ptglab.com/media/phypxl1v/12-days-2025-advent-day-8.png',
        text: 'On the eighth day of Christmas, enter to win a custom IF Blanket, the perfect way to stay warm this holiday season. Don’t wait, this offer is only available on December 21st, 2025.'
    },
    { 
        image1: 'https://www.ptglab.com/media/4mmlqllm/12-days-2025-web-banner-day-9-resize-final.png',
        image2: 'https://www.ptglab.com/media/p2shlq3i/12-days-2025-advent-day-9.png',
        text: 'On the ninth day of Christmas, we’re treating your lab to lunch! Enter to win a team lunch and bring some festive cheer to the whole lab. This is only available December 22nd, 2025.'
    },
    { 
        image1: 'https://www.ptglab.com/media/ge4ks2oq/12-days-2025-web-banner-day-10-resize-final.png',
        image2: 'https://www.ptglab.com/media/yxefuy4u/12-days-2025-advent-day-10.png',
        text: 'On the tenth day of Christmas, we’ve got a gift that keeps you on time and on track, an Apple Watch!'
    },
    { 
        image1: 'https://www.ptglab.com/media/df1bb0yh/12-days-2025-web-banner-day-11-resize-final.png',
        image2: 'https://www.ptglab.com/media/kx5gnx01/12-days-2025-advent-day-11.png',
        text: 'On the eleventh day of Christmas, take your holiday spirits to new heights with a drone! This giveaway is only available on December 24th, 2025.'
    },
    { 
        image1: 'https://www.ptglab.com/media/glnio5jz/12-days-2025-web-banner-day-12-resize-final.png',
        image2: 'https://www.ptglab.com/media/geqntsow/12-days-2025-advent-day-12.png',
        text: 'On the twelfth day of Christmas, we’re ending the season with a classic… a Home Alone Lego set!'
    }
];

// Get Pacific Time using Intl.DateTimeFormat
const pacificNow = new Date(
    new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }).format()
);

// Set the campaign start and end dates
const startDate = new Date(2025, 11, 14); // Start date (year, month - 1, day)
const endDate = new Date(startDate.getTime() + 12 * 24 * 60 * 60 * 1000); // End date (12 days later)

// Select DOM elements
const campaignImage1 = document.getElementById('campaign-image1');
const campaignImage2 = document.getElementById('campaign-image2');
const campaignText = document.getElementById('campaign-text');

// Determine if we are before, during, or after the campaign
if (pacificNow < startDate) {
    // Before the campaign
    campaignImage1.src = 'https://www.ptglab.com/media/geznmqat/12-days-2025-web-banner-blank-2-resize-final.png'; 
    campaignImage1.alt = 'Proteintech 12 Days of Christmas placeholder image';
    campaignImage2.src = 'https://www.ptglab.com/media/xombjpmy/12-days-2025-advent-day-0.png'; 
    campaignText.textContent = 'Get ready! The 12 Days of Christmas giveaway is coming soon!';
} else if (pacificNow >= startDate && pacificNow < endDate) {
    // During the campaign
    const dayDiff = Math.floor((pacificNow - startDate) / (1000 * 60 * 60 * 24));
    campaignImage1.src = campaignData[dayDiff].image1;
    campaignImage2.src = campaignData[dayDiff].image2;
    campaignImage1.alt = `Image for ${campaignData[dayDiff].text}`;
    campaignImage2.alt = `Image for ${campaignData[dayDiff].text}`;
    campaignText.textContent = campaignData[dayDiff].text;
} else {
    // After the campaign
    campaignImage1.src = 'https://www.ptglab.com/media/ottpy5xq/12-days-2025-web-banner-thank-you-resize-final.png'; 
    campaignImage2.src = 'https://www.ptglab.com/media/geqntsow/12-days-2025-advent-day-12.png'; 
    campaignImage1.alt = 'Placeholder image for campaign ended';
    campaignImage2.alt = 'Placeholder image for campaign ended';
    campaignText.textContent = 'Our giveaway has ended.';
}

