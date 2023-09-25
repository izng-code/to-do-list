import todoList from "./makeList";
import drawList from "./drawList";

function drawPage(){
    let content = document.querySelector(".to-do-list");
    for (let i = 0; i < localStorage.length; i++) {
        let projectContainer = document.createElement("div");
        projectContainer.classList.add("project-container");
        projectContainer.setAttribute("listnumber", i.toString());
        let projectTitle = document.createElement("div");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = "My first project"
        content.appendChild(projectContainer);
        projectContainer.appendChild(projectTitle);
        drawList(todoList[i], i);
        let iconDiv = document.createElement("div");
        iconDiv.classList.add("icon-div")
        iconDiv.innerHTML = `<svg class="add-to-do" listnumber="${projectContainer.getAttribute("listnumber")}" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">
        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
        </svg><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">
        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>`;
        projectContainer.appendChild(iconDiv)
    }
};

export default drawPage
