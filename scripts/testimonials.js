// JavaScript for Testimonials Page

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        {
            quote: "Coach Emmanuel completely changed how I see life. His approach is practical and deeply empowering!",
            author: "Sarah N., Entrepreneur"
        },
        {
            quote: "I gained confidence and direction in my career thanks to his coaching. Truly life-transforming.",
            author: "James K., Software Developer"
        },
        {
            quote: "The sessions were deep, meaningful, and results-driven. I highly recommend Coach Emmanuel.",
            author: "Rita B., Creative Director"
        }
    ];

    const testimonialContainer = document.querySelector('.testimonials');

    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('testimonial-card');
        
        const quote = document.createElement('p');
        quote.textContent = `"${testimonial.quote}"`;

        const author = document.createElement('h3');
        author.textContent = `— ${testimonial.author}`;

        testimonialCard.appendChild(quote);
        testimonialCard.appendChild(author);
        testimonialContainer.appendChild(testimonialCard);
    });
});
