import TodoItem from "./TodoItem";
import todoList from "./makeList";

const pushNewTodo = function() {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let due = document.getElementById("due").value;
    let priority = document.getElementById("priority").value;
    todoList.push(new TodoItem(name, description, due, priority, todoList.length))
    localStorage.setItem("todos", JSON.stringify(todoList));
}

export default pushNewTodo