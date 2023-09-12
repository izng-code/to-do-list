import todoList from "./makeList";

function drawList(){
    let content = document.querySelector(".to-do-list");
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    let projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = "My first project"
    content.appendChild(projectContainer);
    projectContainer.appendChild(projectTitle);
    for (let item in todoList){
        let checkbox = document.createElement("div");
        checkbox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">
        <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 "></path>
        </svg>`;
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("to-do-container")
        projectContainer.appendChild(itemDiv);
        let title = document.createElement("div");
        title.textContent = todoList[item].title;
        let dueDate = document.createElement("div");
        dueDate.textContent = `Due: ${todoList[item].dueDate}`;
        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(title);
        itemDiv.appendChild(dueDate);
    };
};

export default drawList
