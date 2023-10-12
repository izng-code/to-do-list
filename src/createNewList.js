import TodoItem from "./TodoItem";
import todoList from "./makeList";

const createNewList = function () {
  let storageLength = todoList.length;
  let name = prompt("Name of the new list?", "My project");
  let tempArray = [
    name,
    new TodoItem(
      "Add more items",
      "Add more to-do-items to your first project",
      "soon",
      "high",
      1,
      false,
    ),
  ];
  todoList.push(tempArray);
  localStorage.setItem(`todo${storageLength}`, JSON.stringify(tempArray));
};

export default createNewList;
