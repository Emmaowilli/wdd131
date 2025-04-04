document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("hidden"); // Toggle visibility of the entire nav
        hamburger.textContent = navMenu.classList.contains("hidden") ? "☰" : "✖";
    });

    // Footer updates
    const currentYear = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");
    
    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = document.lastModified;
});