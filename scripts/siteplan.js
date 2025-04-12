document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const lastModEl = document.getElementById("lastModified");
  if (lastModEl) {
    lastModEl.textContent = "Last Modified: " + document.lastModified;
  }
  const menuBtn = document.getElementById("menu");
  const nav = document.querySelector(".navigation");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
  const toggleBtn = document.getElementById("darkModeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  document.querySelectorAll(".collapsible-header").forEach(header => {
    header.addEventListener("click", () => {
      header.nextElementSibling?.classList.toggle("active");
    });
  });
});

  
  

