import pushNewTodo from "./pushNewToDo";

const createNewToDo = function() {
    let content = document.querySelector("#content");
    content.classList.add("blur");
    let newToDo = document.createElement("form");
    newToDo.classList.add("expanded-to-do");
    newToDo.method = "GET"
    document.body.appendChild(newToDo);
    let name = document.createElement("div");
    name.textContent = "Name";
    let description = document.createElement("div");
    description.textContent = "Description";
    let due = document.createElement("div");
    due.textContent = "Due";
    let priority = document.createElement("div");
    priority.textContent = "Priority";
    let nameText = document.createElement("input");
    nameText.id = "name"
    nameText.required = true
    let descriptionText = document.createElement("input");
    descriptionText.id = "description"
    descriptionText.required = true
    let dueText = document.createElement("input");
    dueText.id = "due"
    let priorityText = document.createElement("select");
    priorityText.id = "priority"
    priorityText.value = "Priority"
    priorityText.required = true;
    let priorityHigh = document.createElement("option");
    priorityHigh.value = "High"
    priorityHigh.textContent = "High"
    priorityText.appendChild(priorityHigh)
    let priorityMedium = document.createElement("option");
    priorityMedium.value = "Medium"
    priorityMedium.textContent = "Medium"
    priorityText.appendChild(priorityMedium)
    let priorityLow = document.createElement("option");
    priorityLow.value = "Low"
    priorityLow.textContent = "Low"
    priorityText.appendChild(priorityLow)
    let addButton = document.createElement("input");
    addButton.type = "Submit";
    addButton.value = "Add";
    addButton.name = "add-button"
    addButton.onclick = function(e) {e.stopPropagation(); pushNewTodo();}
    newToDo.appendChild(name);
    newToDo.appendChild(nameText);
    newToDo.appendChild(description);
    newToDo.appendChild(descriptionText);
    newToDo.appendChild(due);
    newToDo.appendChild(dueText);
    newToDo.appendChild(priority);
    newToDo.appendChild(priorityText);
    newToDo.appendChild(addButton);
}

export default createNewToDo