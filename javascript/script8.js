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
