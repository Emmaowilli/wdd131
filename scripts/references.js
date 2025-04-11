document.addEventListener('DOMContentLoaded', () => {
    const references = [
        {
            title: "Client: Sarah N.",
            reference: "Sarah successfully transitioned from a corporate job to running her own consulting business, thanks to life coaching with Coach Emmanuel."
        },
        {
            title: "Client: James K.",
            reference: "James was able to secure a senior position in his company after working on leadership skills and career development during his coaching sessions."
        },
        {
            title: "Client: Rita B.",
            reference: "Rita managed to enhance her creative abilities and secure new freelance projects, propelling her career as a Creative Director."
        }
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
