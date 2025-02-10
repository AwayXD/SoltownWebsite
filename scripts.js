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
    const menuButton = document.querySelector(".hamburger");
    let menuWindow = document.createElement("div");

    menuWindow.style.position = "fixed";
    menuWindow.style.top = "50%";
    menuWindow.style.left = "50%";
    menuWindow.style.transform = "translate(-50%, -50%)";
    menuWindow.style.width = "250px";
    menuWindow.style.height = "200px";
    menuWindow.style.background = "#333";
    menuWindow.style.color = "#fff";
    menuWindow.style.padding = "15px";
    menuWindow.style.borderRadius = "10px";
    menuWindow.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
    menuWindow.style.display = "none";
    menuWindow.style.textAlign = "center";
    menuWindow.style.zIndex = "1000";

    menuWindow.innerHTML = `
        <h3 style="margin-top: 0;">Menu</h3>
        <ul style="list-style: none; padding: 0;">
            <li><a href="home.html" style="color: white; text-decoration: none; display: block; padding: 5px;">Home</a></li>
            <li><a href="media.html" style="color: white; text-decoration: none; display: block; padding: 5px;">Media</a></li>
            <li><a href="events.html" style="color: white; text-decoration: none; display: block; padding: 5px;">Events</a></li>
            <li><a href="auditions.html" style="color: white; text-decoration: none; display: block; padding: 5px;">Auditions</a></li>
            <li><a href="members.html" style="color: white; text-decoration: none; display: block; padding: 5px;">Members</a></li>
        </ul>
        <button id="closeMenu" style="margin-top: 10px; background: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">Close</button>
    `;

    document.body.appendChild(menuWindow);

    function toggleMenu() {
        menuWindow.style.display = menuWindow.style.display === "none" ? "block" : "none";
    }

    function closeMenu() {
        menuWindow.style.display = "none";
    }

    menuButton.addEventListener("click", toggleMenu);
    document.getElementById("closeMenu").addEventListener("click", closeMenu);
});



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
