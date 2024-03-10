// attempt01

// Examples
// console.log(solution("abc", "bc"), true); // returns true DONE
// console.log(solution("abc", "d"), false); // returns false DONE
// console.log(solution("abcde", "cde"), true); // DONE
// console.log(solution("abcde", "abc"), false); // DONE
// console.log(solution("sensei", "i"), true); // DONE
// console.log(solution("sumo", "omo"), false); // DONE
// console.log(solution("abc", ""), true);
// console.log(solution(":-)", ":-("), false); // Expected solution(':-)', ':-(') to return false: expected true to equal false

function solution(str, ending) {
  const endingLength = ending.length;
  const strLength = str.length;
  return str.substring(strLength - endingLength) == ending;
}
