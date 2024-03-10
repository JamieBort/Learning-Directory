function requestRandomFortune() {
  // get the fortune
  fetch('/fortunes/random')
    .then(response => {
      if (response.status === 200) {
        // yay we got a fortune!
        return response.json();
      } else {
        // do something here for other non-success status codes
      }
    })
    .then(fortune => {
      document.querySelector('#fortune').innerHTML = fortune;
    });

  // get the lucky numbers
  fetch('/luckyNumbers')
    .then(response => {
      if (response.status === 200) {
        // yay we got a fortune!
        return response.json();
      } else {
        // do something here for other non-success status codes
      }
    })
    .then(luckyNumbers => {
      let numbersHTML = '';

      for (let num of luckyNumbers) {
        numbersHTML += `<div>${num}</div>`;
      }

      document.querySelector('#luckyNumbers').innerHTML = numbersHTML;
    });
}

// request fortune on page load
requestRandomFortune();

// listen for clicks on the load another fortune button
document.querySelector('#load').addEventListener('click', () => requestRandomFortune());
