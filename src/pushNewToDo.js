import TodoItem from "./TodoItem";
import todoList from "./makeList";

const pushNewTodo = function(button) {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let due = document.getElementById("due").value;
    let priority = document.getElementById("priority").value;
    let list = button.getAttribute["listnumber"];
    todoList.push(new TodoItem(name, description, due, priority, todoList.length, list))
    localStorage.setItem("todos", JSON.stringify(todoList));
}

export default pushNewTodo