import TodoItem from "./TodoItem";

let todoList = [[]];
if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let json = localStorage.getItem(`todo${i}`);
        todoList[i] = JSON.parse(json);
    }
   //let json = localStorage.getItem("todos");
   //todoList = JSON.parse(json)
}
else {
    todoList[0].push(new TodoItem("Add more items", "Add more to-do-items to your first project","soon","high", 0, 0))
    localStorage.setItem("todo0", JSON.stringify(todoList[0]));
}
export default todoList