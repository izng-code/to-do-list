const scrollVertical = function() {
    const scrollContainer = document.querySelectorAll(".project-container");

    scrollContainer.forEach(container=> {container.addEventListener("wheel", (evt) => {
        evt.stopImmediatePropagation();
        container.scrollDown += evt.deltaX;
    })});
}

export default scrollVertical