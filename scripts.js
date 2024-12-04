// Fade-in effect for all elements with class '.fade-in'
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-in');
    const options = {
        threshold: 0.3
    };
    
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    elements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Add fade-in effect to images when they are fully loaded
    const images = document.querySelectorAll('.image-hover');
    images.forEach(image => {
        image.onload = function () {
            image.classList.add('loaded');
        };
    });
});
