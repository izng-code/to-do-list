import expandToDo from "./expandToDo";
import collapseExpandedToDo from "./collapseExpandedToDo";
import createNewToDo from "./createNewToDo";
import completeToDo from "./completeToDo";
import createNewList from "./createNewList";
import drawPage from "./drawPage";
import erasePage from "./erasePage";
import deleteList from "./deleteList";

const clickHandler = function () {
  let toDoItems = document.querySelectorAll(".to-do-container");
  toDoItems.forEach((todo) =>
    todo.addEventListener("click", function (e) {
      let listnumber = todo.getAttribute("listnumber");
      let currentToDo = todo.getAttribute("number");
      e.stopPropagation();
      e.preventDefault();
      expandToDo(listnumber, currentToDo);
    }),
  );
  let addButtons = document.querySelectorAll(".add-to-do");
  addButtons.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      let listnumber = button.getAttribute("listnumber");
      createNewToDo(listnumber);
    }),
  );
  collapseExpandedToDo();
  let checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      let listnumber = button.getAttribute("listnumber");
      completeToDo(button, listnumber);
    }),
  );
  let plusButton = document.querySelector(".plus");
  plusButton.addEventListener(
    "click",
    function onClick(e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      createNewList();
      plusButton.removeEventListener("click", onClick);
      erasePage();
      drawPage();
    },
    { once: true },
  );
  let removeButton = document.querySelectorAll(".remove-list");
  removeButton.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      let listnumber = button.getAttribute("listnumber");
      deleteList(listnumber);
      erasePage();
      drawPage();
    }),
  );
};

export default clickHandler;
