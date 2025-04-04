document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  const temp = parseFloat(document.getElementById("temp").textContent);
  const speed = parseFloat(document.getElementById("speed").textContent);
  const chillElement = document.getElementById("chill");

  function calculateWindChill(t, s) {
    return temp <= 10 && speed > 4.8
      ? Math.round(13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16))
      : "N/A";
  }

  chillElement.textContent = calculateWindChill(temp, speed) === "N/A" ? "N/A" : `${calculateWindChill(temp, speed)} °C`;
});
