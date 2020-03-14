console.log("iTunes");

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

// SELECT AND STORE ELEMENTS FROM HTML PAGE ================
let userSearch = document.querySelector('input');
let searchButton = document.querySelector('button');

let musicPlayer = document.querySelector("audio");
let searchResults = document.querySelector("section");

// CREATE EVENT LISTENER FOR SEARCH BUTTON ===========
searchButton.addEventListener('click', function(){

// Setup FETCH TO ACCESS API ==============
  fetch(`https://itunes.apple.com/search?term=${userSearch.value}&limit=10`)
      .then(function(response) {
        response.json().then(function(data) {
          console.log(data)

// CREATE FOR LOOP for looping objects and key/value pairs and render to page as the "results"
    // let results = data.length;
      for(let i=0; i<data.results.length; i++){
        console.log(data.results[i]);

// Create a new HTML element via DOM manipulation
    let littleBox = document.createElement('div');
// Add the new element to the parent section "searchResults"
    searchResults.appendChild(littleBox);
// Iterate through the FOR loop and add results to each div
    littleBox.value=`${data.results[i].previewUrl}`
// Look at Objects in ChromeDev "Inspect Tool" to see which key/value pairs you need to reference (artworkUrl100, trackName, artistName)
    littleBox.innerHTML = `<img src="${data.results[i].artworkUrl100}"> <h3>${data.results[i].trackName}</h3>
    <h4>${data.results[i].artistName}</h4>`

// Once song/band is clicked on page, make it play the song
      littleBox.addEventListener("click", function() {musicPlayer.src = littleBox.value;
        })
      }
    })
  })
})
