import todoList from "./makeList";
import collapseExpandedToDo from "./collapseExpandedToDo";

const expandToDo = function(number) {
    let content = document.querySelector("#content");
    content.classList.add("blur");
    let expandedToDo = document.createElement("div");
    expandedToDo.classList.add("expanded-to-do");
    document.body.appendChild(expandedToDo);
    let name = document.createElement("div");
    name.textContent = "Name";
    let description = document.createElement("div");
    description.textContent = "Description";
    let due = document.createElement("div");
    due.textContent = "Due";
    let priority = document.createElement("div");
    priority.textContent = "Priority";
    let nameText = document.createElement("div");
    nameText.classList.add("editable-text");
    nameText.textContent = todoList[number].title;
    let descriptionText = document.createElement("div");
    descriptionText.classList.add("editable-text");
    descriptionText.textContent = todoList[number].description;
    let dueText = document.createElement("div");
    dueText.classList.add("editable-text");
    dueText.textContent = todoList[number].dueDate;
    let priorityText = document.createElement("div");
    priorityText.classList.add("editable-text");
    priorityText.textContent = todoList[number].priority;
    expandedToDo.appendChild(name);
    expandedToDo.appendChild(nameText);
    expandedToDo.appendChild(description);
    expandedToDo.appendChild(descriptionText);
    expandedToDo.appendChild(due);
    expandedToDo.appendChild(dueText);
    expandedToDo.appendChild(priority);
    expandedToDo.appendChild(priorityText);
    collapseExpandedToDo();
}

export default expandToDo