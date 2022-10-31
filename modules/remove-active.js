/** Module used to remove the active status for navbar menu */
const optionsMenu = document.querySelectorAll(".menu-option");
const removeActive = function removeActive() {
  optionsMenu.forEach((option) => {
    option.classList.remove("blue");
  });
}

export default removeActive;