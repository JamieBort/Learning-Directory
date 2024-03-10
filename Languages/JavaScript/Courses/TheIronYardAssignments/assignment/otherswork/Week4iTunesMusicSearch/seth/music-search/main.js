let content = document.querySelector(".container");
let songs = document.querySelector(".results");
let audioContent = document.querySelector(".player");
let audio = document.querySelector(".music-player");
let searchBar = document.querySelector(".search-form");
let search = document.querySelector("#search")
let button = document.querySelector("#searchButton")
let buy = document.querySelectorAll("#buySong")
let results;





button.addEventListener("click", function searchSongs() {


  fetch(`https://itunes.apple.com/search?term==${search.value}`)

    .then(function(response) {
      if (response.status === 200) {
        return response.json();
      }
    })

    .then(function(data) {
      console.log(data);
      songs.innerHTML = "";
      let results = data.results;
      for (var i = 0; i < results.length; i++) {
        songs.innerHTML += `
    <div class="songContainer">
      <img src=${results[i].artworkUrl100
} >
<button type="button" name="button" id="playSong${[i]}" class="playSong" onclick="" >PREVIEW SONG</button><span><a href=${results[i].trackViewUrl} target="_blank"><button type="button" name="button" id="buySong" class="buySong">BUY ON iTUNES</button></a></span>
<h3>${results[i].trackName}</h3>
<h2>${results[i].artistName}<h2>
    </div>
    `

      }

      for (let i = 0; i < results.length; i++) {
        let play = document.querySelectorAll('.playSong');
        play[i].addEventListener('click', function() {
          audioContent.innerHTML = `

                  <audio class="music-player" src="${results[i].previewUrl}" autoplay controls></audio>
                  <div id="nowPlaying">
                  <p>Now playing:
                  ${results[i].trackName} - ${results[i].artistName}</p>
                  </div>
                `
        })
      }


    })


})
