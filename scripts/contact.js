function handleFormScontactubmission(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
  
    if (name && email && message) { 
      const contactData = { name, email, message };
      localStorage.setItem("lastContact", JSON.stringify(contactData)); 
      const confirmation = document.createElement("p");
      confirmation.innerHTML = `Thank you, ${name}! Your message is received.`; 
      document.querySelector(".contact-form").appendChild(confirmation);
    } else {
      const error = document.createElement("p");
      error.innerHTML = `Please complete all fields.`; 
      document.querySelector(".contact-form").appendChild(error);
    }
  }
  
  function displayLastContact() {
    const saved = localStorage.getItem("lastContact");
    if (saved) { 
      const { name } = JSON.parse(saved);
      console.log(`Last contacted by: ${name}`);
    }
  }
  
  const formConfig = {
    fields: 3,
    maxMessageLength: 500
  };
  
  const inputs = ["Name", "Email", "Message"];
  inputs.forEach(input => {
    console.log(`Input: ${input}`);
  });
 
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form form");
    if (form) {
      form.addEventListener("submit", handleFormSubmission);
    }
    displayLastContact();
  });
