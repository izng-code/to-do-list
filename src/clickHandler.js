import expandToDo from "./expandToDo";

const clickHandler = function() {
    let toDoItems = document.querySelectorAll(".to-do-container");
    toDoItems.forEach((todo) => todo.addEventListener("click", () => {
        let currentToDo = todo.getAttribute("number");
        expandToDo(currentToDo);
    }))
}

export default clickHandler;