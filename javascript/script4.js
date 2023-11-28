const rectangles = document.querySelectorAll('.rectangle');
const initialImages = [
  '../assets/images/flowersone.png',
  '../assets/images/mirrorone.png',
  '../assets/images/knifeone.png',
  '../assets/images/wineone.png',
  '../assets/images/blackcatone.png',
  '../assets/images/clockone.png'
];

const altImages = [
  '../assets/images/flowersthree.png',
  '../assets/images/mirrorthree.png',
  '../assets/images/knifethree.png',
  '../assets/images/winethree.png',
  '../assets/images/blackcatthree.png',
  '../assets/images/clockthree.png'
];

// Preload alt images
const altImageObjects = altImages.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

let currentIndex = 0;

function changeImage() {
  rectangles[currentIndex].querySelector('img').src = altImages[currentIndex]; // Change to alternate image

  // Wait for some time before reverting to the initial image
  setTimeout(() => {
    rectangles[currentIndex].querySelector('img').src = initialImages[currentIndex]; // Revert to initial image after some time
    currentIndex = (currentIndex + 1) % rectangles.length;

    // When all rectangles are cycled through, restart the animation
    if (currentIndex === 0) {
      setTimeout(() => {
        rectangles.forEach((rectangle, index) => {
          rectangle.querySelector('img').src = initialImages[index]; // Reset all rectangles to initial images
        });
        setTimeout(changeImage, 1000); // Restart the animation
      }, 1000);
    } else {
      changeImage(); // Move to the next rectangle
    }
  }, 1000); // Time duration for alternate image display
}

// Start animation
changeImage();
