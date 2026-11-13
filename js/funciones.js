window.addEventListener("DOMContentLoaded", () => {
  let triggerMenu = document.getElementById("btnMenu");
  let menuEnSi = document.getElementById("menu");
  let abierto = false;

  triggerMenu.addEventListener("click", () => {
    abierto = !abierto;
    menuEnSi.style.display = abierto ? "block" : "none";
  
  });
});
