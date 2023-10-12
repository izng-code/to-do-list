import TodoItem from "./TodoItem";
import todoList from "./makeList";

const pushNewTodo = function (listnumber) {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let due = document.getElementById("due").value;
  let priority = document.getElementById("priority").value;
  todoList[listnumber].push(
    new TodoItem(name, description, due, priority, todoList[listnumber].length),
  );
  localStorage.setItem(
    `todo${listnumber}`,
    JSON.stringify(todoList[listnumber]),
  );
};

export default pushNewTodo;
