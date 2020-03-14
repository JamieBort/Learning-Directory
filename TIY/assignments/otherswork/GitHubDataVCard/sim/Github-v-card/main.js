let container = document.querySelector(".info")

let data = new XMLHttpRequest();
data.addEventListener("load", giveinfo);
data.open("GET", "https://api.github.com/users/simsaini");
data.send();


function giveinfo(){
  let info = JSON.parse(this.responseText);
  console.log(info.name);
  console.log(info.html_url);
  console.log(info.email);
  console.log(info.company);
  console.log(info.blog);
  console.log(info.avatar_url);
}
