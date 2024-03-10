window.onload = init;
function init() {
    getPetData();
}
function getPetData() {
    var request = new XMLHttpRequest(); // Creates an XMLHttpRequest. Assigns it to 'request'.
    request.open("GET", "pets.json"); // Creates a request from our server for the file 'pest.json';
    request.onreadystatechange = function () { // Upon response, do the following. In other words, when your ready state changes, call this function.:
        var div = document.getElementById("pets"); // Get/find the <div> tag with the id of 'pets' in the pest.html file
        if (this.readyState == this.DONE && this.status == 200) {
            var type = request.getResponseHeader("Content-Type");
            console.log("Content-type: " + type);
            console.log("Status: " + this.statusText);

            // console.log(this.readyState); // My code.
            // console.log(this.status); // My code.  this.readyState is the ready state of _this object_. In other words, it's the ready state of the request object from line 6 above.

            if (this.responseText != null) { // If the response isn't empty, do the following:
                div.innerHTML = this.responseText; // insert it into the <div> tag that we got/found on line 9 above.
            }
            else {
                div.innerHTML = "Error: no data"; // Otherwise insert "Error: no data" into that <div> tag.
            }
        }
    };
    request.send(); // Sends the request.
}