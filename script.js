// Replace these placeholder URLs with the community's real invite and service links.
const LINKS = {
  discord: "https://discord.gg/bullshitprojectdbdm",
  appeals: "https://discord.gg/rPTGXgVXKD",
  kofi: "https://ko-fi.com/turbodarkow",
  telegram: "https://t.me/bsprojapp"
};

document.getElementById("discordLink").href = LINKS.discord;
const appealsLink = document.getElementById("appealsLink");
if (LINKS.appeals) appealsLink.href = LINKS.appeals;

document.querySelectorAll("[data-placeholder]").forEach(link => {
  const key = link.dataset.placeholder;
  if (LINKS[key]) {
    link.href = LINKS[key];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = link.textContent.replace("ADD ", "OPEN ").replace(" LINK", "");
  } else {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("This link has not been configured yet. Add the real URL in script.js.");
    });
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
