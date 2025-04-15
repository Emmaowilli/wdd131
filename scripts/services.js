function renderServices() {
  const services = [
    {
      title: "George William",
      description: "Customized one-on-one coaching sessions for personal growth.",
      image: "images/services1.jpg",
      alt: "Photo of George William."
    },
    {
      title: "Emlyn Tod",
      description: "Identify strengths and improve for a fulfilling life.",
      image: "images/services2.jpg",
      alt: "Photo of Emlyn Tod."
    },
    {
      title: "Okello Bonny",
      description: "Empower positive changes through actionable steps.",
      image: "images/services3.jpg",
      alt: "Photo of Okello Bonny."
    },
    {
      title: "Coaching Room Two",
      description: "Group coaching for collaboration and shared growth.",
      image: "images/services4.jpg",
      alt: "Photo of group."
    }
  ];

  const container = document.querySelector(".services");
  if (container) {
    container.innerHTML = `<h2>Our Coaching Services</h2>`;
    services.forEach(service => {
      const card = document.createElement("div");
      card.className = "service-card";
      card.innerHTML = `
        <h3>${service.title}</h3>
        <img src="${service.image}" alt="${service.alt}" loading="lazy">
        <p class="service-desc">${service.description}</p>
      `;
      container.appendChild(card);
    });
  }
}

function toggleDescriptions() {
  const descriptions = document.querySelectorAll(".service-desc");
  descriptions.forEach(desc => {
    desc.style.display = desc.style.display === "block" ? "none" : "block";
  });
}

const serviceSettings = {
  maxClients: 20,
  sessionLength: "1 hour"
};

const categories = ["Personal", "Career", "Group"];
categories.forEach(category => {
  console.log(`Category: ${category}`); 
});

function saveServiceInterest() {
  const interest = "Personal Coaching";
  localStorage.setItem("serviceInterest", interest); 
  console.log(`Interested in: ${interest}`);
}

document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  saveServiceInterest();
  const servicesSection = document.querySelector(".services");
  if (servicesSection) { 
    servicesSection.addEventListener("click", toggleDescriptions);
  }
});
  
  
