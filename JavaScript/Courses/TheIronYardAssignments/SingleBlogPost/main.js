const blogPost = {
  title: "The Amazing Sloth",
  meta: {
    date: "May 2, 2017"
  },
  post: {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/MC_Drei-Finger-Faultier.jpg",
    content: "Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sloth"
  }
};

// Start Editing Here

// Use template literal!!!!!!

let blog = `
<div>
<h2>${blogPost.title}</h2>
<div class = 'meta'>

<p>${blogPost.meta.date}</p>

<img src="${blogPost.post.image}" alt="Picture Link is Broken">

<p>${blogPost.post.content}</p>

<p>Part of this content was pulled from</p><a href="${blogPost.site.url}">${blogPost.site.name}</a>

</div>

`;
console.log(blog);

document.getElementById('container').innerHTML = blog;
