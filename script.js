const campaignData = [
    { 
        image1: 'https://www.ptglab.com/media/zwvp2x3y/dec-14.png',
        image2: 'https://www.ptglab.com/media/vtwd1roq/dec-15.png',
        text: 'On the first day of Christmas, you could win a GoPro Hero to capture every epic adventure. Ready, set, action!'
    },
    { 
        image1: 'https://www.ptglab.com/media/vtwd1roq/dec-15.png',
        image2: 'https://www.ptglab.com/media/l0ydg4te/dec-16.png', 
        text: 'On the second day of Christmas, you could win a box of cookies to sweeten up your lab crew! Science is better with snacks, right?'
    },
    { 
        image1: 'https://www.ptglab.com/media/l0ydg4te/dec-16.png',
        image2: 'https://www.ptglab.com/media/vtwd1roq/dec-15.png',
        text: 'On the third day of Christmas, you could win an ugly sweater sticker! Add some flair and festive cheer to your ugly sweater gear.'
    },
    { 
        image1: 'https://www.ptglab.com/media/3mynkb3h/dec-17.png',
        image2: 'https://www.ptglab.com/media/vtwd1roq/dec-15.png',
        text: 'On the fourth day of Christmas, you could win a portable projector for epic movie nights or next-level presentations.' 
    },
    { 
        image1: 'https://www.ptglab.com/media/yzlpk3ln/dec-18.png',
        image2: 'https://www.ptglab.com/media/vtwd1roq/dec-15.png',
         text: 'On the fifth day of Christmas, you could win a custom lab coat mug! Personalized with your name, it’s the perfect blend of science and style for every sip.'
    },
    { 
        image1: 'day6.jpg',
        image2: 'day6.jpg',
        text: 'On the sixth day of Christmas, you could stand a chance to brighten your day with a colorful Alice the Alpaca temporary tattoo or laptop sticker.'
    },
    { 
        image1: 'day7.jpg',
        image2: 'day7.jpg',
        text: 'On the seventh of Christmas, you could win a pizza party for the whole lab — Because science and pizza are the perfect pairing.'
    },
    { 
        image1: 'day8.jpg',
        image2: 'day8.jpg',
        text: 'On the eighth day of Christmas, you could win a Bose Quiet Comfort Headphones! Tune in to your favorite beats or just enjoy the peace.'
    },
    { 
        image1: 'day9.jpg',
        image2: 'day9.jpg',
        text: 'On the ninth day of Christmas, you could win a Proteintech drink koozie. Keep your drinks chilled…with a festive koozie featuring your favorite antibody provider!'
    },
    { 
        image1: 'day10.jpg',
        image2: 'day10.jpg',
        text: 'On the tenth day of Christmas, you could win an Oura Ring to track your sleep, steps, and science-worthy stats.  '
    },
    { 
        image1: 'day11.jpg',
        image2: 'day11.jpg',
        text: 'On the eleventh day of Christmas, serve up some holiday cheers with these hand painted 12 Days-themed plates perfect for cookies, snacks, or your favorite festive feast.'
    },
    { 
        image1: 'day12.jpg',
        image2: 'day12.jpg',
        text: 'On the twelfth day of Christmas, you could win a Ray-Ban Meta Glasses to keep you connected and stylish all year long.'
    }
];

// Get current Central Time
const now = new Date();
const centralOffset = new Date().getTimezoneOffset() + 360; // Central Time is UTC-6
const centralNow = new Date(now.getTime() - centralOffset * 60000);

// Set the campaign start and end dates
const startDate = new Date(2024, 11, 14); // Start date (year, month - 1, day)
const endDate = new Date(startDate.getTime() + 12 * 24 * 60 * 60 * 1000); // End date (12 days later)

// Select DOM elements
const image1Container = document.getElementById('campaign-container-image1');
const image2Container = document.getElementById('campaign-container-image2');
const textContainer = document.getElementById('campaign-container-text');

// Determine if we are before, during, or after the campaign
if (centralNow < startDate) {
    // Before the campaign
    image1Container.innerHTML = `
        <img src="https://www.ptglab.com/media/s5vpabqu/12-days-of-christmas-placeholder.jpg" alt="Coming Soon">
    `;
    image2Container.innerHTML = `
        <img src="https://www.ptglab.com/media/5pujuon1/recombinant-antibodies.png" alt="Coming Soon">
    `;
    textContainer.innerHTML = `<p>Get ready! The 12 Days of Christmas giveaway is coming soon!</p>`;
} else if (centralNow >= startDate && centralNow < endDate) {
    // During the campaign
    const dayDiff = Math.floor((centralNow - startDate) / (1000 * 60 * 60 * 24));
    image1Container.innerHTML = `
        <img src="${campaignData[dayDiff].image1}" alt="Image 1 for ${campaignData[dayDiff].text}">
    `;
    image2Container.innerHTML = `
        <img src="${campaignData[dayDiff].image2}" alt="Image 2 for ${campaignData[dayDiff].text}">
    `;
    textContainer.innerHTML = `<p>${campaignData[dayDiff].text}</p>`;
} else {
    // After the campaign
    image1Container.innerHTML = `
        <img src="https://www.ptglab.com/img/chromotek_homepage.webp" alt="Thank You">
    `;
    image2Container.innerHTML = `
        <img src="https://www.ptglab.com/media/et1jo0lw/flexable-2-0-web-banner.png" alt="Thank You">
    `;
    textContainer.innerHTML = `<p>Thank you for participating in our 12 Days of Christmas campaign!</p>`;
}
