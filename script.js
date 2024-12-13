    const campaignData = [
        { 
        image1: 'https://www.ptglab.com/media/v5obsomg/12-days-of-christmas-2024-header-01.jpg',
        image2: 'https://www.ptglab.com/media/r4rhlbfl/2024-12days-webcalendar-01.jpg',
        text: 'On the first day of Christmas, you could win a GoPro Hero to capture every epic adventure. Ready, set, action!'
    },
    { 
        image1: 'https://www.ptglab.com/media/simoons3/12-days-of-christmas-2024-header-02.jpg',
        image2: 'https://www.ptglab.com/media/02mfl2ud/2024-12days-webcalendar-02.jpg', 
        text: 'On the second day of Christmas, you could win a box of cookies to sweeten up your lab crew! Science is better with snacks, right?'
    },
    { 
        image1: 'https://www.ptglab.com/media/ghcdekmj/12-days-of-christmas-2024-header-03.jpg',
        image2: 'https://www.ptglab.com/media/13bbnftc/2024-12days-webcalendar-03.jpg',
        text: 'On the third day of Christmas, you could win an ugly sweater sticker! Add some flair and festive cheer to your ugly sweater gear.'
    },
    { 
        image1: 'https://www.ptglab.com/media/bprl5x23/12-days-of-christmas-2024-header-04.jpg',
        image2: 'https://www.ptglab.com/media/ff0pskcw/2024-12days-webcalendar-04.jpg',
        text: 'On the fourth day of Christmas, you could win a portable projector for epic movie nights or next-level presentations.' 
    },
    { 
        image1: 'https://www.ptglab.com/media/wbfb3xh3/12-days-of-christmas-2024-header-05.jpg',
        image2: 'https://www.ptglab.com/media/jhhfinnl/2024-12days-webcalendar-05.jpg',
         text: 'On the fifth day of Christmas, you could win a custom lab coat mug! Personalized with your name, it’s the perfect blend of science and style for every sip.'
    },
    { 
        image1: 'https://www.ptglab.com/media/xjqdq1ws/12-days-of-christmas-2024-header-06.jpg',
        image2: 'https://www.ptglab.com/media/040lv5bg/2024-12days-webcalendar-06.jpg',
        text: 'On the sixth day of Christmas, you could stand a chance to brighten your day with a colorful Alice the Alpaca temporary tattoo or laptop sticker.'
    },
    { 
        image1: 'https://www.ptglab.com/media/mvhblukx/12-days-of-christmas-2024-header-07.jpg',
        image2: 'https://www.ptglab.com/media/mw0pxyo0/2024-12days-webcalendar-07.jpg',
        text: 'On the seventh of Christmas, you could win a pizza party for the whole lab — Because science and pizza are the perfect pairing.'
    },
    { 
        image1: 'https://www.ptglab.com/media/oykbthst/12-days-of-christmas-2024-header-08.jpg',
        image2: 'https://www.ptglab.com/media/yrnonz3z/2024-12days-webcalendar-08.jpg',
        text: 'On the eighth day of Christmas, you could win a Bose Quiet Comfort headphones! Tune in to your favorite beats or just enjoy the peace.'
    },
    { 
        image1: 'https://www.ptglab.com/media/mnuaxxm4/12-days-of-christmas-2024-header-09.jpg',
        image2: 'https://www.ptglab.com/media/dhifotq5/2024-12days-webcalendar-09.jpg',
        text: 'On the ninth day of Christmas, you could win a Proteintech drink koozie. Keep your drinks chilled…with a festive koozie featuring your favorite antibody provider!'
    },
    { 
        image1: 'https://www.ptglab.com/media/mmufbuv1/12-days-of-christmas-2024-header-10.jpg',
        image2: 'https://www.ptglab.com/media/eokjeoed/2024-12days-webcalendar-10.jpg',
        text: 'On the tenth day of Christmas, you could win an Oura Ring to track your sleep, steps, and science-worthy stats.  '
    },
    { 
        image1: 'https://www.ptglab.com/media/4ltb0qz4/12-days-of-christmas-2024-header-11.jpg',
        image2: 'https://www.ptglab.com/media/bzxdgub2/2024-12days-webcalendar-11.jpg',
        text: 'On the eleventh day of Christmas, serve up some holiday cheers with these hand painted 12 days-themed plates perfect for cookies, snacks, or your favorite festive feast.'
    },
    { 
        image1: 'https://www.ptglab.com/media/ovzda3qy/12-days-of-christmas-2024-header-12.jpg',
        image2: 'https://www.ptglab.com/media/zycjhwc2/2024-12days-webcalendar-12.jpg',
        text: 'On the twelfth day of Christmas, you could win a Ray-Ban Meta Glasses to keep you connected and stylish all year long.'
    }
];

// Get current Pacific Time
const now = new Date();
const pacificOffset = new Date().getTimezoneOffset() + 480; // Pacific Time is UTC-8
const pacificNow = new Date(now.getTime() - pacificOffset * 60000);

// Set the campaign start and end dates
const startDate = new Date(2024, 11, 14); // Start date (year, month - 1, day)
const endDate = new Date(startDate.getTime() + 12 * 24 * 60 * 60 * 1000); // End date (12 days later)

// Select DOM elements
const campaignImage1 = document.getElementById('campaign-image1');
const campaignImage2 = document.getElementById('campaign-image2');
const campaignText = document.getElementById('campaign-text');

// Determine if we are before, during, or after the campaign
if (pacificNow < startDate) {
    // Before the campaign
    campaignImage1.src = 'https://www.ptglab.com/media/s5vpabqu/12-days-of-christmas-placeholder.jpg'; 
    campaignImage1.alt = 'Proteintech 12 Days of Christmas placeholder image';
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
    campaignImage1.src = 'https://www.ptglab.com/media/rspjmjgs/12-days-of-christmas-2024-end.jpg'; 
    campaignImage2.src = 'https://www.ptglab.com/media/fvvcb0vb/2024-12days-webcalendar-end.jpg'; 
    campaignImage1.alt = 'Placeholder image for campaign ended';
    campaignImage2.alt = 'Placeholder image for campaign ended';
    campaignText.textContent = 'Our giveaway has ended.';
}
