// Project data stored in an array of objects
const projects = [
    { title: "Project 1", desc: "A cool web app", img: "https://via.placeholder.com/300x200" },
    { title: "Project 2", desc: "A responsive site", img: "https://via.placeholder.com/300x200" },
    { title: "Project 3", desc: "An interactive game", img: "https://via.placeholder.com/300x200" }
];

// Function to render projects
function renderProjects() {
    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        // Using template literals for string manipulation
        const projectHTML = `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <img src="${project.img}" alt="${project.title}" loading="lazy">
            </div>
        `;
        projectList.innerHTML += projectHTML;
    });
}

// DOM manipulation and event listener for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Conditional branching
    if (name && email && message) {
        document.getElementById("form-response").textContent = `Thank you, ${name}! Your message has been sent.`;
        this.reset();
    } else {
        document.getElementById("form-response").textContent = "Please fill out all fields.";
    }
});

// Theme toggle with localStorage
function toggleTheme() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Load theme from localStorage on page load
function loadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
    }
}

// Event listener for theme toggle
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Initialize the page
renderProjects();
loadTheme();
