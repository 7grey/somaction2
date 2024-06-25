//hamburger menu toggle//
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('navigation');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

//JavaScript for Dropdown Menu
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner .slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const slidesContainer = document.querySelector('.banner .slides');
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    showSlide(currentSlide); // Show the first slide initially
    setInterval(nextSlide, 4000); // Change slide every 4 seconds

    // Expose the next and prev functions to the global scope
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
});




function toggleDetails() {
    var details = document.getElementById("details");
    details.classList.toggle("hidden");
}



document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return false;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            event.preventDefault();
            return false;
        }

    });

    function validateEmail(email) {
        // Simple regex for validating email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        // Regex for validating phone number (basic example, adjust as necessary)
        var phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format for international numbers
        return phoneRegex.test(phone);
    }
});

//JavaScript to handle the accordion functionality://
document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion-button");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

