// temples.js - JavaScript for Temple Album

document.addEventListener("DOMContentLoaded", () => {
    // Handle hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
        hamburger.textContent = navMenu.classList.contains("hidden") ? "☰" : "✖";
    });

    // Update footer copyright year and last modified date
    const footer = document.querySelector("footer");
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;

    footer.innerHTML += `<p>&copy; ${year} Temple Album | Last Updated: ${lastModified}</p>`;
});