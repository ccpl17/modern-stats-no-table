const img = document.querySelectorAll("img");
const svg = document.querySelectorAll("svg");

for (let i = 0; i < img.length; i++) {
  img[i].setAttribute("draggable", "false");
}

for (let i = 0; i < svg.length; i++) {
  svg[i].setAttribute("draggable", "false");
}

document.querySelector(".title-bar").addEventListener("contextmenu", (e) => e.preventDefault());
document
  .getElementById("chrome-close")
  .addEventListener("click", (e) => window.__TAURI__.window.getCurrent().close());
document.querySelector(".app-icon").addEventListener("contextmenu", (e) => e.preventDefault());
