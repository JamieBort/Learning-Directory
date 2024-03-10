// attempt01

// Examples
console.log(solution("abc", "bc"), true); // returns true DONE
console.log(solution("abc", "d"), false); // returns false DONE
console.log(solution("abcde", "cde"), true); // DONE
console.log(solution("abcde", "abc"), false); // DONE
console.log(solution("sensei", "i"), true); // DONE
console.log(solution("sumo", "omo"), false); // DONE
console.log(solution("abc", ""), true); // This one didn't work with the code below.

function solution(str, ending) {
  const endingLength = ending.length;
  const strLength = str.length;
  let status;
  for (let index = 0; index < endingLength; index++) {
    if (ending[endingLength - 1 - index] === str[strLength - 1 - index]) {
      //   console.log(
      //     `ending[endingLength-1-${index}]:`,
      //     ending[endingLength - 1 - index],
      //     `str[strLength-1-${index}]]:`,
      //     str[strLength - 1 - index],
      //   );
      status = true;
    } else {
      //   console.log(
      //     `ending[endingLength-1-${index}]!= str[strLength - 1 - ${index}]`,
      //   );
      status = false;
    }
  }
  return status;
}
