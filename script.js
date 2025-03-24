document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            if (i === index) testimonial.classList.add("active");
        });
        index = (index + 1) % testimonials.length;
    }

    setInterval(showTestimonial, 3000);
});
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let submitButton = document.querySelector(".submit-btn");
    submitButton.innerText = "Sending...";
    submitButton.style.background = "#ffcc00";
    
    setTimeout(() => {
        submitButton.innerText = "Message Sent!";
        submitButton.style.background = "#28a745";
    }, 2000);
});
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".contact-form input, .contact-form textarea");

    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.boxShadow = "0px 0px 10px rgba(255, 204, 0, 0.8)";
        });

        input.addEventListener("blur", () => {
            input.style.boxShadow = "none";
        });
    });
});
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Create a success message
    let successMsg = document.createElement("p");
    successMsg.textContent = "Your message has been sent successfully!";
    successMsg.style.color = "#28a745";
    successMsg.style.marginTop = "10px";
    successMsg.style.fontWeight = "bold";

    // Append the message below the button
    let form = document.querySelector(".contact-form");
    if (!document.querySelector(".success-message")) {
        successMsg.classList.add("success-message");
        form.appendChild(successMsg);
    }

    // Clear the form
    form.reset();
});
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    alert("Your message has been sent!");
    this.reset();
});
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    alert("Your message has been sent!");
    this.reset();
});
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    alert("Your message has been sent!");
    this.reset();
});
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("http")) return;
            e.preventDefault();
            let targetUrl = this.getAttribute("href");
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});
