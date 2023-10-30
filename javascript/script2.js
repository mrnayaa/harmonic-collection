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