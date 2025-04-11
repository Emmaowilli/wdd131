
// JavaScript for Testimonials Page

// You can add any interactivity for the testimonials page here if needed.
// For now, we won't dynamically inject testimonials since they're already in the HTML.

// Example: Dynamically update year and last modified date in the footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModified = document.getElementById('lastModified');
  
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    if (lastModified) {
      lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }
  });
  