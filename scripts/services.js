// JavaScript for Services Page

document.addEventListener('DOMContentLoaded', () => {
    const services = [
        {
            title: "Career Coaching",
            description: "Guiding individuals to excel in their professional paths by setting clear goals and building confidence."
        },
        {
            title: "Life Coaching",
            description: "Empowering individuals to make positive changes and overcome personal challenges through actionable steps."
        },
        {
            title: "Personal Growth",
            description: "Helping clients identify their strengths and areas for improvement to cultivate a more fulfilling life."
        }
    ];

    const serviceContainer = document.querySelector('.services');

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
        
        const title = document.createElement('h3');
        title.textContent = service.title;

        const description = document.createElement('p');
        description.textContent = service.description;

        serviceCard.appendChild(title);
        serviceCard.appendChild(description);
        serviceContainer.appendChild(serviceCard);
    });
});
