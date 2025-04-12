document.addEventListener('DOMContentLoaded', () => {
    const references = [      
    ];

    const referenceContainer = document.querySelector('.references');

    references.forEach(reference => {
        const referenceCard = document.createElement('div');
        referenceCard.classList.add('reference-card');
        
        const title = document.createElement('h3');
        title.textContent = reference.title;

        const description = document.createElement('p');
        description.textContent = reference.reference;

        referenceCard.appendChild(title);
        referenceCard.appendChild(description);
        referenceContainer.appendChild(referenceCard);
    });
});
