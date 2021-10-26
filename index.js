const navigationListItem = document.querySelectorAll(".navigation__list-item")

for (let i = 0; i < navigationListItem.length; i++) {
  navigationListItem[i].addEventListener("click", () => {
    document
      .querySelector(".navigation__list--active")
      .classList.remove("navigation__list--active")

    navigationListItem[i].classList.add("navigation__list--active")
  })
}
