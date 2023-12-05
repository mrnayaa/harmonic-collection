const imageUrls = [
    '../assets/images/technobackground.png',
    '../assets/images/nostalgia.png',
    '../assets/images/mountains.png',
    // Add more image URLs as needed
];

let currentIndex = 0;

// Preload images
const preloadImages = () => {
    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
};

// Function to change background image with a smooth transition
const changeBackground = () => {
    if (currentIndex === imageUrls.length) {
        currentIndex = 0;
    }

    document.body.style.backgroundImage = `url('${imageUrls[currentIndex]}')`;

    currentIndex++;
};

// Preload images and start changing background at intervals
preloadImages();

// Change background image every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 1000);