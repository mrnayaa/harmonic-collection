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


document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const rectangles = document.querySelectorAll('.rectangle');
    const embeddedText = document.querySelector('.embedded-text'); // Added this line

    let isBlackAndWhite = false;

    rectangles.forEach(rectangle => {
        rectangle.addEventListener('click', function() {
            if (popup.style.display === 'block') {
                popup.style.display = 'none';
                overlay.style.display = 'none';
                document.body.style.filter = 'brightness(100%) grayscale(0)';
                isBlackAndWhite = false;
                embeddedText.style.display = 'none'; // Hide the embedded text when closing the popup
            } else {
                popup.style.display = 'block';
                overlay.style.display = 'block';
                if (!isBlackAndWhite) {
                    document.body.style.filter = 'brightness(50%) grayscale(100%)';
                    isBlackAndWhite = true;
                }
                embeddedText.style.display = 'block'; // Show the embedded text when opening the popup
            }
        });
    });

    popup.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.filter = 'brightness(100%) grayscale(0)';
        isBlackAndWhite = false;
        embeddedText.style.display = 'none'; // Hide the embedded text when closing the popup
    });
});