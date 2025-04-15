function updateFooter() {
  const yearSpan = document.querySelector("#year");
  const lastModified = document.querySelector("#lastModified");
  if (yearSpan && lastModified) { 
    yearSpan.innerHTML = `${new Date().getFullYear()}`; 
    lastModified.innerHTML = `Last Modified: ${document.lastModified}`; 
  }
}

function rotateTestimonials() {
  const cards = document.querySelectorAll(".testimonial-card");
  if (cards.length > 1) { 
    let index = 0;
    cards[index].style.display = "block";
    setInterval(() => {
      cards[index].style.display = "none";
      index = (index + 1) % cards.length;
      cards[index].style.display = "block";
    }, 5000);
  }
}

const testimonialData = {
  count: 3,
  source: "Client feedback"
};

const authors = ["Sarah N.", "James K.", "Rita B."];
authors.forEach(author => {
  console.log(`Author: ${author}`); 
});

function trackVisits() {
  let visits = parseInt(localStorage.getItem("testimonialVisits") || "0") + 1;
  localStorage.setItem("testimonialVisits", visits); 
  console.log(`Testimonial page visits: ${visits}`);
}

document.addEventListener("DOMContentLoaded", () => {
  updateFooter();
  trackVisits();
  rotateTestimonials();
});