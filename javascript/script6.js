const rectangles = document.querySelectorAll('.rectangle');
const textContainer = document.querySelector('.center-text-container');
const overlay = document.querySelector('.overlay');

rectangles.forEach((rectangle, index) => {
    rectangle.addEventListener('click', () => {
        if (textContainer.style.display === 'block') {
            textContainer.style.display = 'none';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Fully transparent
        } else {
            const text = rectangle.querySelector('p').textContent;
            textContainer.textContent = text;
            textContainer.style.display = 'block';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Semi-transparent black
        }
    });
});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
