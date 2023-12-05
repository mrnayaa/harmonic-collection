document.addEventListener("DOMContentLoaded", function () {
    const container1 = document.getElementById("container1");

    container1.addEventListener("click", function () {
        const windowHeight = window.innerHeight;
        const scrollTarget = (document.body.scrollHeight - windowHeight) * 0.3; // 20% of the page height
        
        window.scrollTo({
            top: scrollTarget,
            behavior: "smooth"
        });
    });
});

const divs = document.querySelectorAll('.parent > div');

divs.forEach((div) => {
    const image = div.querySelector('.image');
    const textContainer = div.querySelector('.text-container');

    div.addEventListener('click', () => {
        // Toggle blur effect for the clicked div's image
        image.classList.toggle('blur');

        // Toggle text container visibility
        textContainer.classList.toggle('show');
    });
});
