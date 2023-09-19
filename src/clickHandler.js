import expandToDo from "./expandToDo";
import collapseExpandedToDo from "./collapseExpandedToDo";
import createNewToDo from "./createNewToDo";
import completeToDo from "./completeToDo";

const clickHandler = function() {
    let toDoItems = document.querySelectorAll(".to-do-container");
    toDoItems.forEach((todo) => todo.addEventListener("click", function(e) {
        let currentToDo = todo.getAttribute("number");
        e.stopPropagation();
        e.preventDefault();
        expandToDo(currentToDo);
    }))
    let addButtons = document.querySelectorAll(".add-to-do");
    addButtons.forEach((button) => button.addEventListener("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        createNewToDo();
    }))
    collapseExpandedToDo();
    let checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((button) => button.addEventListener("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        completeToDo(button);
    }))

}

export default clickHandler;