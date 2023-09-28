import todoList from "./makeList";

const deleteList = function(listnumber) {
    //let list = document.querySelector(`[listnumber="${listnumber}"]`);
    //list.remove();
    //todoList[listnumber] = "";
    //localStorage.removeItem(`todo${listnumber}`);
    for (let i = listnumber; i < localStorage.length - 1; i++) {
        localStorage.setItem(`todo${listnumber}`, localStorage.getItem(`todo${parseInt(listnumber) + 1}`));
    }
    localStorage.removeItem(`todo${localStorage.length - 1}`);
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let json = localStorage.getItem(`todo${i}`);
            todoList[i] = JSON.parse(json);
        }
    }
    else {
        todoList[0].push("My first project")
        todoList[0].push(new TodoItem("Add more items", "Add more to-do-items to your first project","soon","high", 1, false))
        localStorage.setItem("todo0", JSON.stringify(todoList[0]));
    }    
}

export default deleteList