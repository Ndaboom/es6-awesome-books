import screens from "./modules/screens.js";
import book from "./modules/books.js";
import currentTime from "./modules/timer.js";

const projectInit = () => {
// Navigation between views
const optionsMenu = document.querySelectorAll(".menu-option");

function removeActive() {
  optionsMenu.forEach((option) => {
    option.classList.remove("blue");
  });
}

// Add click listener to menu options
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

