document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo img");
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // 🔹 Mobile Menu Toggle
    if (menuIcon) {
        menuIcon.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // 🔹 Logo Hover Animation
    logo.addEventListener("mouseenter", () => {
        logo.style.transform = "scale(1.1)";
        logo.style.transition = "transform 0.3s ease";
    });

    logo.addEventListener("mouseleave", () => {
        logo.style.transform = "scale(1)";
    });

    // 🔹 Click to Redirect to Homepage
    logo.addEventListener("click", () => {
        window.location.href = "index.html"; // Make sure this is the correct homepage filename
    });

    // 🔹 Scroll Effect - Shrink Logo on Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            logo.style.width = "90px"; // Shrinks when scrolling
        } else {
            logo.style.width = "120px"; // Restores size when at top
        }
    });
});
