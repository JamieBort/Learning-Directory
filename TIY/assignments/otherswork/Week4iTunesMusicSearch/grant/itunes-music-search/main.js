/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
var input = document.querySelector("input");
var button = document.querySelector("button");
var results = document.getElementById("results");
let player = document.querySelector(".music-player");
var retData;

console.log(input);
console.log(button);
console.log(results);
console.log(player);
console.log(retData);

button.addEventListener("click", function search() {

  results.innerHTML = "";

  console.log(input.value);
  var searchTerm = input.value;
  // searchTerm = searchTerm.split(" ").join("+");

  fetch(`https://itunes.apple.com/search?term=${searchTerm}`).then(function(response) {
    // console.log(response);
    response.json().then(function(data) {
        // console.log(data);
        retData = data.results;
        // console.log(retData);
        // return retData;
        console.log(retData[0].trackName);
      })

      .then(function() {
        for (var i = 0; i < retData.length; i++) {
          results.innerHTML += `
                    <div class="box">
                      <button id="track${[i]}" class="track">
                      <div>
                        <img src=${retData[i].artworkUrl100} alt=${retData[i].artistName}>
                      </div>
                      <p class="songTitle">${retData[i].trackName}</p>
                      <p class="bandName">${retData[i].artistName}</p>
                      </button>
                    </div>`
        }
        var track = document.querySelectorAll(".track");
        for (var i = 0; i < retData.length; i++) {
          // console.log(retData[0].trackName);
          track[i].addEventListener("click", function() {
            player.innerHTML = `
                                   <p>Now playing:  ${retData[i].trackName} - ${retData[i].artistName}</p>
                                   <audio src="${retData[i].previewUrl}" controls="controls" class="music-player"></audio>
                                 `
          })
        }
      })
  })
})
