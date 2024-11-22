const menuButtons = [...document.getElementsByClassName("menu-button")];

menuButtons.forEach((menuButton) => {
  menuButton.addEventListener("click", () => {
    if (menuButton.classList.contains("unactive")) {
      menuButton.classList.remove("unactive");
      menuButton.classList.add("active");
      const newIcon = menuButton.querySelector("img").id;
      menuButton.querySelector("img").src = `icons/${newIcon}_dark.svg`;
    }
    const toDeactivate = menuButtons.filter((el) => el.id !== menuButton.id);
    toDeactivate.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
        el.classList.add("unactive");
        const newIcon = el.querySelector("img").id;
        el.querySelector("img").src = `icons/${newIcon}_light.svg`;
      }
    });
  });
});
