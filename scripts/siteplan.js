const sitePlan = {
    name: "Coach Emmanuel Incorporation",
    purpose: "To provide a platform for life coaching services, testimonials, and client inquiries, promoting mentorship and personal growth.",
    scenarios: [
        "What coaching services are available for career guidance?",
        "How can I book a session with Coach Emmanuel?"
    ],
    colors: [
        { name: "Warm Gold", hex: "#D4A017", use: "Headings and buttons" },
        { name: "Soft Blue", hex: "#E6F0FA", use: "Background" },
        { name: "Dark Gray", hex: "#333", use: "Body text" }
    ],
    fonts: [
        { name: "Montserrat", use: "Headings" },
        { name: "Roboto", use: "Body text" }
    ]
};

function displaySitePlan() {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
        missionSection.innerHTML += `
            <h3>Site Plan Preview</h3>
            <p><strong>Purpose:</strong> ${sitePlan.purpose}</p>
            <p><strong>Scenarios:</strong></p>
            <ul>${sitePlan.scenarios.map(s => `<li>${s}</li>`).join('')}</ul>
        `;
    }
}

function setTimeGreeting() {
    const greetingElement = document.getElementById('time-greeting');
    if (greetingElement) {
        const hour = new Date().getHours();
        let greeting;
        if (hour < 12) greeting = "Good Morning!";
        else if (hour < 18) greeting = "Good Afternoon!";
        else greeting = "Good Evening!";
        greetingElement.textContent = greeting;
    }
}

function setLastModified() {
    const footerText = document.getElementById('footer-text');
    if (footerText) {
        const lastModified = new Date(document.lastModified).toLocaleString();
        footerText.innerHTML += ` | Last Modified: ${lastModified}`;
    }
}

function toggleTheme() {
    const button = document.getElementById('theme-toggle');
    if (button) {
        button.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displaySitePlan();
    setTimeGreeting();
    setLastModified();
    toggleTheme();
});