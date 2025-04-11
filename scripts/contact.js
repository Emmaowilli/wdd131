document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});
