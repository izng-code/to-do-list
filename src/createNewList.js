import TodoItem from "./TodoItem";

const createNewList = function() {
    let storageLength =localStorage.length;
    let name = prompt("Name of the new list?","My project");
    let tempArray = [new TodoItem("Add more items", "Add more to-do-items to your first project","soon","high", 0, 0)];
    localStorage.setItem(`todo${storageLength}`,JSON.stringify(tempArray))
}

export default createNewList