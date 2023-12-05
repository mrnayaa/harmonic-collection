const imageUrls = [
    '../assets/images/techno1.png',
    '../assets/images/techno2.png',
    '../assets/images/techno3.png',
    '../assets/images/techno4.png',
    '../assets/images/techno5.png',
    '../assets/images/techno6.png',
    '../assets/images/techno7.png',
    '../assets/images/techno8.png',
    '../assets/images/techno9.png',
    '../assets/images/techno10.png',
    '../assets/images/techno11.png',
    '../assets/images/techno12.png',
    '../assets/images/techno13.png',
    '../assets/images/techno14.png',
    '../assets/images/techno15.png',
    '../assets/images/techno16.png',
    '../assets/images/techno17.png',
    '../assets/images/techno16.png',
    '../assets/images/techno15.png',
    '../assets/images/techno14.png',
    '../assets/images/techno13.png',
    '../assets/images/techno12.png',
    '../assets/images/techno11.png',
    '../assets/images/techno10.png',
    '../assets/images/techno9.png',
    '../assets/images/techno8.png',
    '../assets/images/techno7.png',
    '../assets/images/techno6.png',
    '../assets/images/techno5.png',
    '../assets/images/techno4.png',
    '../assets/images/techno3.png',
    '../assets/images/techno2.png',
    '../assets/images/techno1.png',
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
setInterval(changeBackground, 200);

const f = document.getElementById("foo");
document.addEventListener(
  "click",
  (ev) => {
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translateX(${ev.clientX - 25}px)`;
  },
  false
);

// Get the elements
const div2 = document.querySelector('.div2');
const outlineContainer = document.getElementById('outline-container');

// Define the scroll distance as a multiplier of the viewport height
const scrollMultiplier = 1.5; // Adjust as needed

// Add a click event listener to the div2 element
div2.addEventListener('click', () => {
    // Calculate the scroll distance as a percentage of the viewport height
    const viewportHeight = window.innerHeight;
    const scrollDistance = viewportHeight * scrollMultiplier;

    // Scroll down the page smoothly
    window.scrollBy({
        top: scrollDistance,
        behavior: 'smooth'
    });
});
