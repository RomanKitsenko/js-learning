let modal = document.querySelector(".modal");
let button = document.querySelector(".button");
let modalCloseBtn = document.querySelector(".modal__close");

document.querySelector("button").onclick = function () {
  modal.classList.add("modal--open");
};

document.querySelector(".modal__close").onclick = function () {
  modal.classList.remove("modal--open");
};
