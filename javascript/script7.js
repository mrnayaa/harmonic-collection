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

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");
  
    images.forEach(function (image) {
      image.addEventListener("click", function () {
        const parent = this.parentNode;
        const clonedImages = Array.from(parent.children);
  
        clonedImages.sort(function () {
          return 0.5 - Math.random();
        });
  
        parent.innerHTML = "";
        clonedImages.forEach(function (img) {
          parent.appendChild(img);
        });
      });
    });
  });
  