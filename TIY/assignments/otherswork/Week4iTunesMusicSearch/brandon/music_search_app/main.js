/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

console.log('hello, world');

let content = document.querySelector(".container");
let input = document.querySelector('#input');
let submit = document.querySelector('#submit');
let songs = document.querySelector("#results")
let clear = document.querySelector("#clear");

clear.addEventListener('click', function(){
  songs.innerHTML = ' ';
})

submit.addEventListener('click', function(){

fetch(`https://itunes.apple.com/search?term==${input.value}`).then(function(response){
  if (response.status === 200) {
    return response.json();
  }
  })
  .then(function(data){
    console.log(data);
    songs.innerHTML = '';
    let results = data.results;
    for (i=0; i<results.length; i++){
    songs.innerHTML +=
    `<div class="artist_profile">
    <h3>${results[i].artistName}</h3>
    <h4>${results[i].trackName}</h4>
    <img src="${results[i].artworkUrl100}"></img>
    <a href="${results[i].trackViewUrl}">About Artist</a>
    <audio controls>
      <source src="${results[i].previewUrl}">
      </audio>
    </div>`;
    }
  })
});
