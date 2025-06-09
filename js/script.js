document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Recupera o tema salvo
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    toggleButton.textContent = "☀️";
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      toggleButton.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleButton.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
});