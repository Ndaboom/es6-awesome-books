const aboutView = document.querySelector(".about-view");
const listView = document.querySelector(".list-view");
const formView = document.querySelector(".books-crud");
const homeTitle = document.querySelector(".home-title");
const screensArr = [listView, formView, aboutView];

let screens = (i) => {
  screensArr.forEach((option) => {
    option.classList.add("hidden");
  });
  if (i === 0) {
    homeTitle.classList.remove("hidden");
  } else {
    homeTitle.classList.add("hidden");
  }
  screensArr[i].classList.remove("hidden");
};

export default screens;