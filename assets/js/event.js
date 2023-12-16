import { isValid } from "./formValidator.js";
import { toggleMenu } from "./menu.js";
import { runSlider } from "./slider.js";
const d = document;
export function event() {
  runSlider();

  d.addEventListener("keypress", (e) => {
    const errorMessage = d.querySelector(".form-error-message");
    const button = d.querySelector("form button");
    if (!isValid(e.target)) {
      errorMessage.style.display = "block";
      button.disabled = true;
    } else {
      errorMessage.style.display = "none";
      button.disabled = false;
    }
  });

  d.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.className === "menu-icon") {
      e.stopPropagation();
      toggleMenu();
      e.target.src.includes("icon-hamburger")
        ? (e.target.src = "./images/icon-close.svg")
        : (e.target.src = "./images/icon-hamburger.svg");
    }
  });

}
