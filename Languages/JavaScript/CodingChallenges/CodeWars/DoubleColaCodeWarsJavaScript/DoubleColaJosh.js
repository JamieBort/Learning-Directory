let friends = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'];

const doubleCola = function(names, r) {
  //Get 'r' to match with array naming syntax
  r -= 1;
  //Iterate through the names array looking for the rth term.
  for (let i = 0; i <= r; i++) {
    if (i == r) {
      return names[i]
    }
    else {
      names.push(names[i]);
      names.push(names[i]);
      names.shift();
      r--;
      i--;
      console.log(names);
    }
  }
  //If we haven't gotten to the rth term yet, take the current term, push it into the array twice
  //If we have gotten to the rth term, return the term
}

console.log(doubleCola(friends, 3));

0 = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

1 = ['Leonard', 'Penny', 'Rajesh', 'Howard', 'Sheldon', 'Sheldon']

2 = ['Penny', 'Rajesh', 'Howard', 'Sheldon', 'Sheldon', 'Leonard', 'Leonard']

3 = ['Rajesh', 'Howard', 'Sheldon', 'Sheldon', 'Leonard', 'Leonard', 'Penny', 'Penny']

4 = ['Howard', 'Sheldon', 'Sheldon', 'Leonard', 'Leonard', 'Penny', 'Penny', 'Rajesh', 'Rajesh']

5 = ['Sheldon', 'Sheldon', 'Leonard', 'Leonard', 'Penny', 'Penny', 'Rajesh', 'Rajesh', 'Howard', 'Howard']

6 = ['Sheldon', 'Leonard', 'Leonard', 'Penny', 'Penny', 'Rajesh', 'Rajesh', 'Howard', 'Howard', 'Sheldon', 'Sheldon']
