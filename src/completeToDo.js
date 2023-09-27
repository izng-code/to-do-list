import todoList from "./makeList";

const completeToDo = function(button, listnumber) {
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">
    <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path>
    </svg>`
    todoList[listnumber][button.getAttribute("number")].completed = true;//.splice(button.getAttribute("number"),1);
    localStorage.setItem(`todo${listnumber}`, JSON.stringify(todoList[listnumber]));
    let container = document.querySelector(`[listnumber="${listnumber}"] [number='${button.getAttribute("number")}']`);
    container.classList.add("strike");
    container.classList.add("completed");
    setTimeout(function(){
        //document.querySelector(`[listnumber="${listnumber}"]`).removeChild(container);
        
    }, 600);
}

export default completeToDo;