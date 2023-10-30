const images = document.querySelectorAll('.image');

function startAnimation() {
  let index = 0;

  function animateImage() {
    images[index].classList.add('active');

    setTimeout(() => {
      images[index].classList.remove('active');

      index++;
      if (index >= images.length) {
        index = 0;
      }

      animateImage();
    }, 1000); // Adjust the delay (in milliseconds) between images
  }

  animateImage();
}

startAnimation();

