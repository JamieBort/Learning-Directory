// attempt08.js

const argument01 = 99;
const argument02 = 999;
let stat = true;

// console.log(999 * 999);

// console.log(999 ** 2);
// console.log(argument01 ** 2);

const PalindromeCheck = function (param) {
  //   console.log("original param:", param);
  let str = param.toString();
  //   console.log("str:", str);
  for (let index = 0; index < str.length / 2; index++) {
    console.log(
      "INDEX:",
      index,
      "PARAM[INDEX]:",
      str[index],
      "str[str.length - INDEX - 1]:",
      str[str.length - index - 1],
    );
    if (str[index] != str[str.length - index - 1]) {
      stat = false;
      return stat;
      // return false;
    }
  }
  stat = true;
  return stat;
  //   return true;
};
// // PalindromeCheck(argument02 ** 2);
console.log(PalindromeCheck(argument01 ** 2));
// // PalindromeCheck(8765432112345678);
// // console.log(PalindromeCheck(876543112345678));

let tempVariable = argument01 ** 2;
// console.log("tempVariable:", tempVariable);
// console.log(PalindromeCheck(tempVariable));
// tempVariable -= 1;
// console.log("tempVariable:", tempVariable);
// console.log(PalindromeCheck(tempVariable));
// tempVariable -= 1;
// console.log("tempVariable:", tempVariable);
// console.log(PalindromeCheck(tempVariable));
// tempVariable -= 1;
// console.log("tempVariable:", tempVariable);
// console.log(PalindromeCheck(tempVariable));
// tempVariable -= 1;
// console.log("tempVariable:", tempVariable);
// console.log(PalindromeCheck(tempVariable));
// tempVariable -= 1;
// console.log("tempVariable:", tempVariable);
// console.log(PalindromeCheck(tempVariable));
// tempVariable -= 1;
// console.log("tempVariable:", tempVariable);
// console.log(PalindromeCheck(tempVariable));

while (stat === false) {
  //   console.log("stat:", stat);

  console.log("tempVariable:", tempVariable);
  console.log(PalindromeCheck(tempVariable));
  tempVariable -= 1;
}
