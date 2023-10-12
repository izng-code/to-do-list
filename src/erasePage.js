const erasePage = function () {
  let content = document.querySelector(".to-do-list");
  while (content.lastElementChild) {
    content.removeChild(content.lastElementChild);
  }
};

export default erasePage;
