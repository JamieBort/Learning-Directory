# README GitHub RESTAPI v3 Crash Course with Vanilla Javascript (No Dependencies)

This directory houses code that I am writing from following along with this [github REST API v3 Crash Course with Vanilla Javascript (No dependencies)](https://www.youtube.com/watch?v=5QlE6o-iYcE) YouTube video.


Steps:
1. creat html file.
2. in terminal type `http-server .` (see 6:15 min in the video for link to video on this.)
3. add <script> tag in html file for fetch
4. learned about fetch().then().then() vs async and await.
5. learned about 
    ???. Typing `html-5` in the html file.
    ???. starting up a server typ typing  `http-server .` in the terminal.
    a. document.getElementById
    b. variable.appendChild
    c. document.createTextNode
    d. document.createElement 
    e. using chrome dev tools to debug by creating breakpionts
    f. headers
    g. 

    ???. Reading GitHub API docs.

Section 3 Notes
https://developer.github.com/v3/search/#search-commits
fetch() takes two parameters    

Section 4 Notes
Look into this: console.log(response.headers.get("link"))
// Result:
// <https://api.github.com/search/commits?q=repo%3Afreecodecamp%2Ffreecodecamp+author-date%3A2019-03-01..2019-03-31&page=2>; rel="next", <https://api.github.com/search/commits?q=repo%3Afreecodecamp%2Ffreecodecamp+author-date%3A2019-03-01..2019-03-31&page=28>; rel="last"

Table of Contents
1. Search public repositories.
2. Search public issues.
3. Search public commits.
4. Lazy fetching talked about in video but not covered. Refered to another video or lesson or tutorial.
5. Pagination.
6. Authorization - searching private repo issues.
7. Creating Issues.