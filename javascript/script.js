document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the scroll button
    const scrollButton = document.getElementById("scrollButton");

    // Define the target position (1000px from the top)
    const targetPosition = 1000;

    // Add a click event listener to the button
    scrollButton.addEventListener("click", function() {
        // Use the smooth scrolling behavior
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
});