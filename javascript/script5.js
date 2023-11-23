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
  