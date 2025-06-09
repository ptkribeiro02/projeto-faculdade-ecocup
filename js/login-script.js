document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Aplica tema salvo
  if (localStorage.getItem("theme-login") === "dark") {
    body.classList.add("dark-theme-login");
    toggleButton.textContent = "☀️";
  }

  toggleButton.addEventListener("click", (e) => {
    e.preventDefault(); // evita reload por <a href="#">
    body.classList.toggle("dark-theme-login");

    if (body.classList.contains("dark-theme-login")) {
      toggleButton.textContent = "☀️";
      localStorage.setItem("theme-login", "dark");
    } else {
      toggleButton.textContent = "🌙";
      localStorage.setItem("theme-login", "light");
    }
  });
});