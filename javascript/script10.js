const container = document.getElementById('container');
const gridSize = 8;
const totalSquares = gridSize * gridSize;

// Array of image URLs (replace these with your image URLs)
const imageUrls = [
  '../assets/images/pills.png',
  '../assets/images/gloves.png',
  '../assets/images/beth.png',
  '../assets/images/chesspiece.png',
  '../assets/images/clocks.png',
  '../assets/images/chessreview.png',
  '../assets/images/fifties.png',
  '../assets/images/gibson.png',
  

  
  
  
  
  
  
  // Add more image URLs as needed...
];


// Create and append squares with images
for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  const imageUrl = imageUrls[i % imageUrls.length]; // Loop through imageUrls array
  square.style.backgroundImage = `url(${imageUrl})`; // Set background image
  square.addEventListener('click', () => rearrangeSquares());
  container.appendChild(square);
}

// Function to rearrange squares
function rearrangeSquares() {
  const squares = Array.from(document.querySelectorAll('.square'));
  squares.sort(() => Math.random() - 0.5);
  squares.forEach(square => container.appendChild(square));
}
