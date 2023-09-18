import collapseExpandedToDo from "./collapseExpandedToDo";
import createNewToDo from "./createNewToDo";

const addToDoHandler = function() {
    let addButtons = document.querySelectorAll(".add-to-do");
    addButtons.forEach((button) => button.addEventListener("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        createNewToDo();
    }))
    collapseExpandedToDo();
}

export default addToDoHandler