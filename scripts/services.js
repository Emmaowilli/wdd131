document.addEventListener('DOMContentLoaded', () => {
    const services = [
      {
        title: "George William",
        description: "Customized one-on-one coaching sessions to help you achieve personal growth and life transformation.",
        image: "images/services1.jpg",
        alt: "Photo of George William."
      },
      {
        title: "Emlyn Tod",
        description: "Helping clients identify their strengths and areas for improvement to cultivate a more fulfilling life.",
        image: "images/services2.jpg",
        alt: "Photo of Emlyn Tod."
      },
      {
        title: "Okello Bonny",
        description: "Empowering individuals to make positive changes and overcome personal challenges through actionable steps.",
        image: "images/services3.jpg",
        alt: "Photo of Okello Bonny."
      },
      {
        title: "Coaching Room Two",
        description: "Engage in group coaching sessions that foster collaboration, motivation, and shared growth experiences.",
        image: "images/services4.jpg",
        alt: "Photo of group."
      }
    ];
    const container = document.querySelector('.services');
    container.innerHTML = '<h2>Our Coaching Services</h2>';
  
    services.forEach(service => {
      const card = document.createElement('div');
      card.className = 'service-card';
  
      const title = document.createElement('h3');
      title.textContent = service.title;
  
      const img = document.createElement('img');
      img.src = service.image;
      img.alt = service.alt;
  
      const desc = document.createElement('p');
      desc.textContent = service.description;
  
      card.appendChild(title);
      card.appendChild(img);
      card.appendChild(desc);
      container.appendChild(card);
    });
  
    // Footer dynamic year & lastModified (safe check)
    const yearSpan = document.getElementById("year");
    const lastModifiedP = document.getElementById("lastModified");
  
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModifiedP) lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
  });
  
  
