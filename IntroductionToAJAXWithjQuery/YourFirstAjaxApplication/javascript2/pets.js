window.onload = init;
function init() {
    getPetData();
}
function getPetData() {
    var request = new XMLHttpRequest();
    request.open("GET", "pets.json");
    request.onreadystatechange = function () {
        var div = document.getElementById("pets");
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText != null) {
                div.innerHTML = this.responseText;
            }
            else {
                div.innerHTML = "Error: no data";
            }
        }
    };
    request.send();
}