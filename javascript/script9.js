document.addEventListener("DOMContentLoaded", function () {
    const imageList = document.getElementById("image-list");
    const toggleButton = document.getElementById("toggle-button");
    const randomImage = document.getElementById("random-image");
    const randomImg = document.getElementById("random-img");

    // Array of image sources
    const imageSources = [
        "../assets/images/angel.png",
        "../assets/images/playingcards.png",
        "../assets/images/akvarium.png"
        // Add more image URLs as needed
    ];

    // Function to display a random image
    function displayRandomImage() {
        const randomIndex = Math.floor(Math.random() * imageSources.length);
        const randomImageUrl = imageSources[randomIndex];
        randomImg.src = randomImageUrl;
        randomImage.style.display = "block";
        imageList.style.display = "none";
        toggleButton.textContent = "Show Gallery";
    }

    // Automatically cycle through images when the page opens
    let currentImageIndex = 0;

    function nextImage() {
        if (currentImageIndex < imageSources.length - 1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        }

        imageList.style.transform = `translateX(-${currentImageIndex * 100}%)`;

        // Check if the slideshow animation has completed
        if (currentImageIndex === imageSources.length - 1) {
            // Show the toggle button after the slideshow animation ends
            toggleButton.style.display = "block";
        }
    }

    // Interval for automatically cycling through images
    const slideshowInterval = setInterval(nextImage, 2000); // Adjust the duration as needed

    // Event listener for the toggle button
    toggleButton.addEventListener("click", function () {
        if (toggleButton.textContent === "Show Random Image") {
            displayRandomImage();
        } else {
            randomImage.style.display = "none";
            imageList.style.display = "block";
            toggleButton.textContent = "Show Random Image";
        }
    });
});



