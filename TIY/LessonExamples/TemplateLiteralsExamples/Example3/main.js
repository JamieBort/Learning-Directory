// Example1 and Example2 were nothing worth saving/documenting.

function blogPost (title, date, content) {

  let post = `
    <article>
      <h2>${title}</h2>
      <span class="date">${date}</span>
      <div class="post">
        ${content}
      </div>
    </article>
  `;

  console.log(post);
}

blogPost("Intro to Hang Gliding", "April 1st", "Lorem ipsum dolor...");
