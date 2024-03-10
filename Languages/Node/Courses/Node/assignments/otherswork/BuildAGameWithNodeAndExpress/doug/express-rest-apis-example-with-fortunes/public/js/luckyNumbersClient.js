function requestLuckyNumbers() {
  const num = document.querySelector('#num').value;
  const max = document.querySelector('#max').value;

  // get the lucky numbers
  fetch(`/luckyNumbers?num=${num}&max=${max}`)
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

// listen for clicks on the load another fortune button
document.querySelector('#load').addEventListener('click', () => requestLuckyNumbers());
