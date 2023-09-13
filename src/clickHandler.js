import expandToDo from "./expandToDo";

const clickHandler = function() {
    let toDoItems = document.querySelectorAll(".to-do-container");
    toDoItems.forEach((todo) => todo.addEventListener("click", function(e) {
        let currentToDo = todo.getAttribute("number");
        e.stopPropagation();
        e.preventDefault();
        expandToDo(currentToDo);
    }))
}

export default clickHandler;