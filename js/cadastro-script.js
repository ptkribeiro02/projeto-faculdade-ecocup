document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Aplica tema salvo
  if (localStorage.getItem("theme-cadastro") === "dark") {
    body.classList.add("dark-theme-cadastro");
    toggleButton.textContent = "☀️";
  }

  toggleButton.addEventListener("click", (e) => {
    e.preventDefault(); // evitar reload
    body.classList.toggle("dark-theme-cadastro");

    if (body.classList.contains("dark-theme-cadastro")) {
      toggleButton.textContent = "☀️";
      localStorage.setItem("theme-cadastro", "dark");
    } else {
      toggleButton.textContent = "🌙";
      localStorage.setItem("theme-cadastro", "light");
    }
  });
});
