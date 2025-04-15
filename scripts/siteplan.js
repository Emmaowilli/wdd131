function toggleNavigation() {
  const navMenu = document.querySelector("#nav-menu");
  if (navMenu) { 
    navMenu.classList.toggle("hidden");
  }
}

function displayGreeting() {
  const greetingEl = document.querySelector("#time-greeting");
  const hour = new Date().getHours();
  let message;
  if (hour < 12) { 
    message = "Good morning! Start your coaching journey!";
  } else if (hour < 18) {
    message = "Good afternoon! Ready to grow?";
  } else {
    message = "Good evening! Plan your success!";
  }
  if (greetingEl) {
    greetingEl.innerHTML = `${message}`; 
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

const siteConfig = {
  title: "Coach Emmanuel Inc.",
  location: "Kampala, Uganda"
};

const coachingTips = ["Set clear goals", "Stay consistent", "Embrace challenges"];
coachingTips.forEach(tip => {
  console.log(`Tip: ${tip}`);
});

document.addEventListener("DOMContentLoaded", () => {
 const navButton = document.querySelector("#nav-toggle");
  if (navButton) {
    navButton.addEventListener("click", toggleNavigation);
  }

  const themeButton = document.querySelector("#theme-toggle");
  if (themeButton) {
    themeButton.addEventListener("click", toggleTheme);
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  displayGreeting();
});

  
  

