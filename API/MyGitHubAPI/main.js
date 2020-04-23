const express = require('express');
const path = require('path');
const app = express();

const hostname = '127.0.0.1';
const port = 4000;

//virtual prefix and an absolute path.
// app.use('/files', express.static(path.join(__dirname, 'files'))); // I don't currently need this.

//Listening on root
// app.get('/', function (req, res) {
//   //serve 'index.html'
//   res.sendFile(path.join(__dirname + '/index.html'));
//   //__dirname: resolves to  project folder.
// })

app.get('/', (req, res) => res.send(`

<h1>Github Tutorial</h1>
<button id = 'btnRepos'>Repos</button>
<button id = 'btnIssues'>Issues</button>
<button id = 'btnCommits'>Commits</button>
<button id = 'btnIssuesPrivate'>Issues Private</button>
<button id = 'btnCreateIssue'>Create Issue</button>

<div id = 'divResult'></div>
<script>
    // require('dotenv').config();
    
    const btnRepos = document.getElementById("btnRepos")
    const btnIssues = document.getElementById("btnIssues")
    const btnIssuesPrivate = document.getElementById("btnIssuesPrivate")
    const btnCreateIssue = document.getElementById("btnCreateIssue")
    const btnCommits = document.getElementById("btnCommits")
    
    const divResult = document.getElementById("divResult")
    btnRepos.addEventListener("click", getRepos)
    btnIssues.addEventListener("click", getIssues)
    btnCommits.addEventListener("click", e=> getCommits())
    btnIssuesPrivate.addEventListener("click", e=> getIssuesPrivate())
    btnCreateIssue.addEventListener("click", e=> createIssues())

    async function getRepos(){
        clear();
        // const url = "https://api.github.com/search/repositories"
        // const url = "https://api.github.com/"
        // const url = "https://api.github.com/users/jamiebort/repos"
        const url = "https://api.github.com/search/repositories?q=stars:200000..500000" // repository_search_url: "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}" // repositories with between 200000 and 300000 stars.
        const response= await fetch(url)
        const result = await response.json()
        console.log(result)

        result.items.forEach(i=>{ // TODO: what's going on here?
            const anchor = document.createElement("a")
            anchor.href = i.html_url;
            anchor.textContent = i.full_name;
            divResult.appendChild(anchor)
            divResult.appendChild(document.createElement("br"))
        })
    }

    async function getIssues(){
        clear();
        const url = "https://api.github.com/search/issues?q=repo:jamiebort/LearningDirectory type:issue"
        // const url = "https://api.github.com/search/issues?q=author:raisedadead repo:freecodecamp/freecodecamp type:issue"
        const response= await fetch(url)
        const result = await response.json()

        result.items.forEach(i=>{
            const anchor = document.createElement("a")
            anchor.href = i.html_url;
            anchor.textContent = i.title;
            divResult.appendChild(anchor)
            divResult.appendChild(document.createElement("br"))
        })
    }

async function createIssues(){ // going to change get method to post method.
clear();
const url = "https://api.github.com/repos/jamiebort/TestPrivateRepo/issues"
// const url = "https://api.github.com/repos/husseintest/sandboxpublic/issues"
}
const payLoad = {
    title: "Hey my brand new issues!!!!"
}
const response= await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payLoad)
})
const result = await response.json()

const i = result;

// result.items.forEach(i=>{
    const anchor = document.createElement("a")
    anchor.href = i.html_url;
    anchor.textContent = i.title;
    divResult.appendChild(anchor)
    divResult.appendChild(document.createElement("br"))
// })
}

    async function getIssuesPrivate(){
        clear();
        const url = "https://api.github.com/search/issues?q=repo:jamiebort/TestPrivateRepo type:issue"
        const response= await fetch(url, {
            "method": "GET",
            "headers": headers
        })
        const result = await response.json()

        result.items.forEach(i=>{
            const anchor = document.createElement("a")
            anchor.href = i.html_url;
            anchor.textContent = i.title;
            divResult.appendChild(anchor)
            divResult.appendChild(document.createElement("br"))
        })
    }

    async function getCommits(url= "https://api.github.com/search/commits?q=repo:freecodecamp/freecodecamp author-date:2010-03-01..2019-03-31"){
        clear();
        const headers = {
            "Accept": "application/vnd.github.cloak-preview"
        }
        const response= await fetch(url,{
            "method" : "GET", // By default it is GET. This line could be omitted.
            "headers": headers
        })

        const link = response.headers.get("link")
        const links = link.split(",") // split() will create an array.
        // <https://api.github.com/search/commits?q=repo%3Afreecodecamp%2Ffreecodecamp+author-date%3A2019-03-01..2019-03-31&page=2>; rel="next", <https://api.github.com/search/commits?q=repo%3Afreecodecamp%2Ffreecodecamp+author-date%3A2019-03-01..2019-03-31&page=28>; rel="last"
        const urls = links.map(a=> {
            return{
                url:a.split(";")[0].replace(">","").replace("<",""),
                title:a.split(";")[1],
            }
        })

        const result = await response.json()

        result.items.forEach(i=>{
            const img = document.createElement("img")
            img.src = i.author.avatar_url;
            img.style.width= "32px"
            img.style.height="32px"
            const anchor = document.createElement("a")
            anchor.href = i.html_url;
            anchor.textContent = i.commit.message.substr(0,120) + "...";
            divResult.appendChild(img)
            divResult.appendChild(anchor)
            divResult.appendChild(document.createElement("br"))
        })

        urls.forEach(u=>{
            const btn = document.createElement("button")
            btn.textContent = u.title;
            btn.addEventListener("click",e=> getCommits(u.url))
            divResult.appendChild(btn);
        })


    }

    function clear(){ // this function clears the dom of any existing elements. So that when you press the button more than once, the page doesn't fill with dupicate links.
        while(divResult.firstChild) 
        divResult.removeChild(divResult.firstChild);
    }
</script>`))

app.listen(port, function () {
    console.log(`Server running at http://${hostname}:${port}`);
})