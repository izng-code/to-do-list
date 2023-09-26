const scrollHorizontal = function() {
    const scrollContainer = document.querySelector(".to-do-list");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
}

export default scrollHorizontal