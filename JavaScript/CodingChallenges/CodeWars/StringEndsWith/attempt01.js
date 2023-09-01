// attempt01

// Examples
console.log(solution("abc", "bc"), true); // returns true DONE
// console.log(solution("abc", "d"), false); // returns false DONE
// console.log(solution("abcde", "cde"), true); // DONE
// console.log(solution("abcde", "abc"), false);
// console.log(solution("sensei", "i"), true);
// console.log(solution("sumo", "omo"), false);

function solution(str, ending) {
  //   do this for the length of ending
  for (let index = ending.length; index > 0; index--) {
    // console.log(index);
    while (index > 0) {
      if (str[str.length - ending.length + index - 1] === ending[index - 1]) {
        console.log(
          str[str.length - ending.length + index - 1],
          ending[index - 1],
        );
        index--;
      }
      if (index === 0) return true;
      else return false;
    }
  }
}
