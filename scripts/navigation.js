"use strict";

const applyActiveClass = (elm) => {
  console.log(elm);
  const activeElement = document.querySelector(".navigation__list--active");
  activeElement.classList.remove("navigation__list--active");
  elm.parentNode.classList.add("navigation__list--active");
};

const onClickLink = (elm, onClickLink) => {
  applyActiveClass(elm);
  onClickLink();
};
