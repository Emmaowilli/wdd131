document.addEventListener("DOMContentLoaded", () => {
    // Update footer info
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
  
    // Hamburger menu
    const menuBtn = document.getElementById("menu");
    const nav = document.querySelector(".navigation");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  
    // Dark mode toggle
    const toggleBtn = document.getElementById("darkModeToggle");
    toggleBtn?.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  
    // Scroll to top button
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });
    scrollBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Collapsible sections
    document.querySelectorAll(".collapsible-header").forEach(header => {
      header.addEventListener("click", () => {
        header.nextElementSibling.classList.toggle("active");
      });
    });
  });
  
  

