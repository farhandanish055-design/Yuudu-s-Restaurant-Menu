import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./style.css";


function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function init() {
  loadHome(); // 🔥 INI PENTING (auto load)

  document.querySelector(".home-btn").addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  document.querySelector(".menu-btn").addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  document.querySelector(".contact-btn").addEventListener("click", () => {
    clearContent();
    loadContact();
  });
}

init();