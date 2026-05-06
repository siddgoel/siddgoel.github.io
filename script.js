const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const year = document.getElementById("year");

const storedTheme = localStorage.getItem("theme");
if (storedTheme === "light") {
  root.classList.add("light");
  icon.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  root.classList.toggle("light");
  const isLight = root.classList.contains("light");
  icon.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

year.textContent = new Date().getFullYear();
