const deleteList = function(listnumber) {
    let list = document.querySelector(`[listnumber="${listnumber}"]`);
    list.remove();
    localStorage.removeItem(`todo${listnumber}`);
}

export default deleteList