document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
        hamburger.textContent = navMenu.classList.contains("hidden") ? "☰" : "✖";
    });

    const footer = document.querySelector("footer");
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;

    footer.innerHTML += `<p>&copy; ${year} Temple Album | Last Updated: ${lastModified}</p>`;
});