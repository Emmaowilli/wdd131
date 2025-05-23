const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Farmington New Mexico",
        location: "Farmington, New Mexico, United States",
        dedicated: "2025, August, 17",
        area: 28000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/farmington-new-mexico-temple/farmington-new-mexico-temple-56326-main.jpg"
    },
    {
        templeName: "Pesega Samoa",
        location: "Pesega, Apia, Samoa",
        dedicated: "1983, August, 7",
        area: 12500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
    },
    {
        templeName: "Brasília Brazil",
        location: "Brasília, Brazil",
        dedicated: "2023, September, 17",
        area: 30000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
    }
];

const gallery = document.querySelector("#temple-gallery");
const navLinks = document.querySelectorAll("nav ul li a");

const displayTemples = (templesToDisplay) => {
    gallery.innerHTML = ""; 

    templesToDisplay.forEach(temple => {
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.textContent = `${temple.templeName}\n${temple.location}\nDedicated: ${temple.dedicated}\nArea: ${temple.area} sq ft`;

        figure.appendChild(img);
        figure.appendChild(caption);
        gallery.appendChild(figure);
    });
};

const filterTemples = (type) => {
    switch (type.toLowerCase()) {
        case "old":
            return temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        case "new":
            return temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        case "large":
            return temples.filter(t => t.area > 90000);
        case "small":
            return temples.filter(t => t.area < 10000);
        default:
            return temples;
    }
};

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filterType = event.target.textContent.trim();
        const filtered = filterTemples(filterType);
        displayTemples(filtered);
    });
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn?.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

window.addEventListener("load", () => {
    displayTemples(temples); // 👈 This makes the homepage display automatically
});


