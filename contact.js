const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Apply saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
});


    // Contact Form Validation & Success Message
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Message sent successfully! We will get back to you soon.");
            contactForm.reset();
        });
    }

    // Dynamic Glow Effect for Info Boxes
    const infoBoxes = document.querySelectorAll(".info-box");
    infoBoxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.boxShadow = "0px 0px 20px rgba(255, 204, 0, 0.9)";
            box.style.transform = "scale(1.1)";
        });

        box.addEventListener("mouseleave", () => {
            box.style.boxShadow = "none";
            box.style.transform = "scale(1)";
        });
    });

    // Contact Image Glow Effect
    const contactImage = document.querySelector(".contact-image img");
    if (contactImage) {
        contactImage.addEventListener("mouseenter", () => {
            contactImage.style.boxShadow = "0px 0px 20px rgba(255, 204, 0, 0.9)";
            contactImage.style.transform = "scale(1.08)";
        });

        contactImage.addEventListener("mouseleave", () => {
            contactImage.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
            contactImage.style.transform = "scale(1)";
        });
    }

    // Button Glow Effect
    const contactButton = document.querySelector(".contact-form-container button");
    if (contactButton) {
        contactButton.addEventListener("mouseenter", () => {
            contactButton.style.boxShadow = "0px 0px 15px rgba(255, 204, 0, 0.8)";
        });

        contactButton.addEventListener("mouseleave", () => {
            contactButton.style.boxShadow = "none";
        });
    }
});
