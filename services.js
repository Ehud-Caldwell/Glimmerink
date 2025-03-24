
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".service-card img");

    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            img.style.boxShadow = "0px 0px 20px rgba(255, 204, 0, 0.9)";
            img.style.transform = "scale(1.15)";
            img.style.transition = "box-shadow 0.4s ease-in-out, transform 0.3s ease-in-out";
        });

        img.addEventListener("mouseleave", () => {
            img.style.boxShadow = "none";
            img.style.transform = "scale(1)";
        });
    });
});
