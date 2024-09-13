function handleClicked(parent, ele) {
  if (parent == ".side-miniatures") {
    document.querySelector("#bigView").src = ele.src;
  }

  const children = document.querySelector(parent).children;
  Object.values(children).forEach((child) => {
    child.classList.remove("clicked");
    child.classList.add("dimmed");
  });
  ele.classList.remove("dimmed");
  ele.classList.add("clicked");
}
