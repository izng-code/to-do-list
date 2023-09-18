import TodoItem from "./TodoItem";

let todoList = [];
if (localStorage.length > 0) {
   let json = localStorage.getItem("todos");
   todoList = JSON.parse(json)
}
else {
    todoList.push(new TodoItem("Add more items", "Add more to-do-items to your first project","soon","high", 0))
}
export default todoList