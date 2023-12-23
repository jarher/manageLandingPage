import { addClass, removeClass, toggleClass } from "./utils.js";

export function toggleMenu() {
  const mainMenuContainer = document.querySelector(".main-nav");
  const menu = mainMenuContainer.querySelector("menu");


  if (!mainMenuContainer.classList.contains("hidden")) {
    toggleClass(menu, "opacity-0");
    removeClass(menu, "menu-scale");
    setTimeout(() => {
      toggleClass(mainMenuContainer, "opacity-0");
      setTimeout(() => {
        toggleClass(mainMenuContainer, "hidden");
      }, 400);
    }, 300);

    return;
  } else {
    toggleClass(mainMenuContainer, "hidden");
    setTimeout(() => {
      toggleClass(mainMenuContainer, "opacity-0");
      setTimeout(() => {
        toggleClass(menu, "opacity-0");
        addClass(menu, "menu-scale");
      }, 0);
    }, 300);
  }
}
