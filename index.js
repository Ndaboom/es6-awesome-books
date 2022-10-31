import screens from "./modules/screens.js";
import book from "./modules/books.js";
import currentTime from "./modules/timer.js";
import removeActive from "./modules/remove-active.js";

const projectInit = () => {
// Navigation between views
const optionsMenu = document.querySelectorAll(".menu-option");
optionsMenu.forEach((option, index) => {
  option.addEventListener("click", () => {
    removeActive();
    screens(index);
    option.classList.add("blue");
  });
});

// Timer init
currentTime();
}

projectInit();

export default projectInit;

