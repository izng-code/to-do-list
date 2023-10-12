const collapseExpandedToDo = function () {
  let content = document.querySelector("#content");
  content.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    let expandedToDo = document.querySelector(".expanded-to-do");
    if (expandedToDo) {
      expandedToDo.remove();
      content.classList.remove("blur");
    }
  });
};

export default collapseExpandedToDo;
