function requestRobots(type) {
  type = type || 'all';

  fetch(`/robots?type=${type}`)
    // parse the json
    .then(response => response.json())
    // I have robots now
    .then(robots => {
      let robotsHtml = '';

      //for (let robot of robots) {
      for (let x = 0; x < robots.length; x++) {
        let robot = robots[x];
        robotsHtml += `
          <div class="userContainer" data-username="${robot.username}">
            <div class="headshot">
              <img src="${robot.avatar}" alt="">
            </div>
            <h2 class="userName">${robot.name}</h2>
            <p>${robot.company}</p>
            <p>${robot.email}</p>
          </div>
        `;
      }

      // get the directory container
      document.querySelector('.dirContainer').innerHTML = robotsHtml;

      // get each robot and add a click handler
      Array.from(document.querySelectorAll('.userContainer')).forEach(robot => {
        robot.addEventListener('click', event => {
          // go find the userContainer parent
          const username = event.target.closest('.userContainer').getAttribute('data-username');

          // request this robot
          fetch(`/robots/${username}`).then(response => response.json()).then(robot => {
            // render this robot in to the popover dialog
            const robotHTML = `
              <div class="bioContainer">
                <div class="row1">
                  <div id="bioAvaContainer">
                    <img id="bioAvatar" src="${robot.avatar}" alt="">
                  </div>
                  <div id="bioContact">
                    <h2 id="bioName">${robot.name}</h2>
                    <div id="address">
                      <p>${robot.address.city}, ${robot.address.country} | ${robot.job} ${robot.company}</p>
                      <p>${robot.email}</p>
                    </div>
                  </div>
                </div>

                <div class="row2">
                  <div id="subHeaders">
                    <h4 id="education"><strong>Education</strong></h4>
                    <h4 id="skills"><strong>Skills</strong></h4>
                  </div>
                  <div id="subHeadInfo">
                    <p>......</p>
                    <ul>
                      ......
                        <li>......</li>
                      ......
                    </ul>
                  </div>
                </div>
              </div>
            `;

            document.querySelector('#robotDetail').innerHTML = robotHTML;
            document.querySelector('#robotDetail').style = 'display: flex';
          });
        });
      });
    });
}

Array.from(document.querySelectorAll('.employStatus')).forEach(filterLink => {
  filterLink.addEventListener('click', event => {
    requestRobots(event.target.id);
  });
});

requestRobots();

document.querySelector('#robotDetail').addEventListener('click', event => {
  console.log(event.target);
  event.target.style = '';
});
