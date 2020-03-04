let friends = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'];

const doubleCola = function(names, r) {
  let reducer = names.length;

  while (r > reducer) {
    r -= reducer;
    reducer *= 2;
  }

  let ith = 1;
  for (let i = 0; i < names.length; i++) {
    if (r <= ( (ith / names.length) * reducer ) ) {
      return names[i]
    }
    ith++;
  }
}

console.log(doubleCola(friends, 20));
