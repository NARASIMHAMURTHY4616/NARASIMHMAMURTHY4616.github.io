// ===== Typing Effect =====
const text = "Naga Veera Venkata Satya Narasimha Murthy";
let index = 0;
const speed = 100;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

// ===== Live Time =====
function updateTime() {
  const now = new Date();
  document.getElementById("time").innerText =
    "🕒 " + now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// ===== Smooth Scroll =====
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ===== Hover Glow Effect =====
document.querySelectorAll("section").forEach(section => {
  section.addEventListener("mouseover", () => {
    section.style.boxShadow = "0 0 15px #38bdf8";
  });

  section.addEventListener("mouseout", () => {
    section.sty
