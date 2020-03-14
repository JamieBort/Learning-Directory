var htmlBody = document.querySelector("body");
fetch("https://api.github.com/users/jtcanfield")
  .then(
    function(response){
      if (response.status !== 200){
        console.log("ERROR CODE: " + response.status)
        return
      }
      response.json().then(function(data){
        let holder = `
        <h1>${data.name}</h1>
        <div id="mainBody">
          <div id="bodyLeft">
            <h2>The Basics</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>GitHub URL:</strong> <a href="${data.html_url}">@jtcanfield</a></p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Website:</strong> <a href="${data.blog}">jtcanfield.github.io</a></p>
          </div>
          <div id="bodyCenter">
            <h2>The Story</h2>
            <p><img src="${data.avatar_url}">${data.bio}</p>
          </div>
        </div>
        `
        htmlBody.innerHTML = holder;
      })
    }
  )
