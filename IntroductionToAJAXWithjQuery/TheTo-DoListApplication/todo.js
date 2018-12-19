window.onload = init;
function init() {
    getTodoData();
}
function getTodoData() {
    var request = new XMLHttpRequest();
    request.open("GET", "todo.json");
    request.onreadystatechange = function () {
        var listDiv = document.getElementById("todoList");
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText) {
                listDiv.innerHTML = this.responseText;
            }
            else {
                console.log("Error: Data is empty");
            }
        }
    };
    request.send();
}