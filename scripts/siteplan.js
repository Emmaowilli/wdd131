const sitePlan = {
    name: "Coach Emmanuel Incorporation",
    purpose: "To provide a platform for life coaching services, testimonials, and client inquiries, promoting mentorship and personal growth.",
    scenarios: [
        "What coaching services are available for career guidance?",
        "How can I book a session with Coach Emmanuel?"
    ],
    fonts: [
        { name: "Montserrat", use: "Headings" },
        { name: "Roboto", use: "Body text" }
    ]
};

function displaySitePlan() {
    const missionSection = document.getElementById('mission');
    if (!missionSection) return;

    missionSection.innerHTML += `
        <h3>Site Plan Preview</h3>
        <p><strong>Purpose:</strong> ${sitePlan.purpose}</p>
        <p><strong>Scenarios:</strong></p>
        <ul>
            ${sitePlan.scenarios.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <h4>Typography</h4>
        <ul>
            ${sitePlan.fonts.map(f => `<li>${f.name} (Used for: ${f.use})</li>`).join('')}
        </ul>
    `;
}

function setTimeGreeting() {
    const greetingElement = document.getElementById('time-greeting');
    if (!greetingElement) return;

    const hour = new Date().getHours();
    const greeting = hour < 12
        ? "Good Morning!"
        : hour < 18
        ? "Good Afternoon!"
        : "Good Evening!";
        
    greetingElement.textContent = greeting;
}

function setLastModified() {
    const footerText = document.getElementById('footer-text');
    if (!footerText) return;

    const lastModified = new Date(document.lastModified).toLocaleString();
    footerText.innerHTML += ` | Last Modified: ${lastModified}`;
}

function toggleTheme() {
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}

// Initialize everything once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    displaySitePlan();
    setTimeGreeting();
    setLastModified();
    toggleTheme();
});

