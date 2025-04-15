function renderReferences() {
    const references = [
      {
        title: "Emma P., Creative Entrepreneur",
        description: "Transitioned to consulting with coaching."
      },
      {
        title: "Olivia M., Freelance Writer",
        description: "Crafted engaging content with support."
      },
      {
        title: "James K.",
        description: "Secured a senior position."
      },
      {
        title: "Rita B.",
        description: "Enhanced creative abilities."
      }
    ];
  
    const container = document.querySelector(".references");
    if (container) { 
      references.forEach(ref => {
        const card = document.createElement("div");
        card.className = "reference-card";
        card.innerHTML = `
          <h3>${ref.title}</h3>
          <p>${ref.description}</p>
        `; 
        container.appendChild(card);
      });
    }
  }
 
  function highlightReference() {
    const cards = document.querySelectorAll(".reference-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("highlight"));
        card.classList.add("highlight");
      });
    });
  }

  const refMetadata = {
    total: 4,
    updated: "2025"
  };
  
  const refNames = ["Emma", "Olivia", "James", "Rita"];
  refNames.forEach(name => {
    console.log(`Reference: ${name}`);
  });
  
  function trackRefViews() {
    let views = parseInt(localStorage.getItem("refViews") || "0") + 1;
    localStorage.setItem("refViews", views);
    console.log(`Reference page views: ${views}`);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderReferences();
    highlightReference();
    trackRefViews();
  });
