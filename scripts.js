document.addEventListener('DOMContentLoaded', function () {
    // Fade-in effect for elements with class '.fade-in'
    const elements = document.querySelectorAll('.fade-in');
    const fadeOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
  
    
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                entry.target.style.transitionDelay = `${index * 0.2}s`;
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, fadeOptions);

    elements.forEach(el => {
        fadeObserver.observe(el);
    });

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav ul"); // Selects the menu list

    hamburger.addEventListener("click", function () {
        nav.classList.toggle("show"); // Toggles the show class
    });
});





    // Intersection Observer for lazy-loading images with fade-in effect
    const images = document.querySelectorAll('.image-hover');
    const imageOptions = {
        threshold: 0.3
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    }, imageOptions);

    images.forEach(image => {
        imageObserver.observe(image);
    });
});
// to commit lol
