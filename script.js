// Dark/Light mode toggle with localStorage
const toggleBtn = document.querySelector(".mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Change icon 🌙/☀️
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

// Contact form submission (demo only)
document.querySelector(".contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent! (demo only)");
});
