const menuButtons = [...document.getElementsByClassName("menu-button")];

menuButtons.forEach((menuButton) => {
  menuButton.addEventListener("click", () => {
    if (menuButton.classList.contains("unactive")) {
      menuButton.classList.remove("unactive");
      menuButton.classList.add("active");
      console.log;
    }
    const toDeactivate = menuButtons.filter((el) => el.id !== menuButton.id);
    console.log(toDeactivate);
    toDeactivate.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
        el.classList.add("unactive");
      }
    });
  });
});
