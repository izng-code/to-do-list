const scrollHorizontal = function () {
  const scrollContainer = document.querySelector("#content");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    evt.stopImmediatePropagation();
    document.querySelector(".to-do-list").scrollLeft += evt.deltaY;
  });
};

export default scrollHorizontal;
