const f = document.getElementById("foo");
document.addEventListener(
  "click",
  (ev) => {
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translateX(${ev.clientX - 25}px)`;
  },
  false
);

const slider = document.getElementById('blur-slider');
const images = document.querySelectorAll('.parent img');

slider.addEventListener('input', function() {
  const blurValue = this.value / 10; // Adjust the blur scale according to your preference
  images.forEach(img => {
    if (img.getBoundingClientRect().x <= slider.getBoundingClientRect().x + slider.offsetWidth) {
      img.style.filter = `blur(${blurValue}px) grayscale(100%)`;
    } else {
      img.style.filter = 'none';
    }
  });
});
