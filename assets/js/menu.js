export function toggleMenu() {
  const mainMenuContainer = document.querySelector(".main-nav");
  const menu = mainMenuContainer.querySelector("menu");

  if (!mainMenuContainer.classList.contains("hidden")) {
    menu.classList.toggle("opacity-0");
    menu.classList.remove("menu-scale");
    setTimeout(() => {
      mainMenuContainer.classList.toggle("opacity-0");
      setTimeout(() => {
        mainMenuContainer.classList.toggle("hidden");
      }, 400);
    }, 300);

    return;
  } else {
    mainMenuContainer.classList.toggle("hidden");
    setTimeout(() => {
      mainMenuContainer.classList.toggle("opacity-0");
      setTimeout(() => {
        menu.classList.toggle("opacity-0");
        menu.classList.add("menu-scale");
      }, 0);
    }, 300);
  }
}
