document.getElementById('button').addEventListener('click', loadText);

function loadText() {
  console.log("A button was pushed.");
  var xhr = new XMLHttpRequest(); // create xhr opbject

  console.log(xhr); //View the xhr file in the console.

  xhr.open('GET', 'sample.txt', true); // OPEN - type, url/file, async (true/false)

  xhr.onload = function() {
    if (this.status = 200) {
      console.log(this.responseText); // Displays the text from sample.txt in the console.
      document.getElementById('text').innerHTML = this.responseText;
    } else if (this.status = 404) {
      document.getElementById('text').innerHTML = "The document you are looking for is not found."; // If the file is not found and a 404 error is thrown, then this message will display.
    }
  }

  // COMMENT: I kept getting the following error in the console associated with 'xhr.send();' below: 'Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.'

  // As a result I did some research and first tried the CORS chrome add-on. That didn't address the error message. So I eventually found 'Web Server for Chrome'. That seems to address the error.

  xhr.send(); // Sends request to the server.
}
