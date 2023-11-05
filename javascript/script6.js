const rectangles = document.querySelectorAll('.rectangle');
const overlay = document.querySelector('.overlay');

rectangles.forEach((rectangle, index) => {
  rectangle.addEventListener('click', () => {
    const container = document.querySelector('.center-text-container'); // Select the container correctly

    if (container.style.display === 'block') {
      container.style.display = 'none';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else {
      const text = rectangle.querySelector('.text-column p').textContent; // Select the text content correctly
      container.querySelector('.text-column p').textContent = text;
      container.style.display = 'block';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
  });
});






  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
