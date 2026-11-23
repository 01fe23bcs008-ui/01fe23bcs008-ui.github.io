const roles = ["AI / ML Enthusiast", "Computer Science Developer", "Problem Solver", "Technology Explorer"];
let roleIndex = 0, charIndex = 0, deleting = false;
const typed = document.getElementById("typed");
function typeRole() {
  const current = roles[roleIndex];
  typed.textContent = current.slice(0, charIndex);
  if (!deleting && charIndex < current.length) { charIndex++; setTimeout(typeRole, 85); }
  else if (deleting && charIndex > 0) { charIndex--; setTimeout(typeRole, 38); }
  else { deleting = !deleting; if (!deleting) roleIndex = (roleIndex + 1) % roles.length; setTimeout(typeRole, deleting ? 1200 : 350); }
}
setTimeout(typeRole, 500);
document.getElementById("year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
toggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
