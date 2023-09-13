const collapseExpandedToDo = function() {
    let content = document.querySelector("#content");
    content.addEventListener("click", function(e){
        let expandedToDo = document.querySelector(".expanded-to-do");
        document.body.removeChild(expandedToDo);
        content.classList.remove("blur");
    });
}

export default collapseExpandedToDo