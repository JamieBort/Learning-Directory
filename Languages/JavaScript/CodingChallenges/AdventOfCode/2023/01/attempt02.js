// attempt01.js

// Approach:
// Look at each line.
// Find the first number.
// Find the last number.
// Concatenate the two numbers.
// Convert the number from a string to an integer.
// Add them to an array.
// Sum the elements of the array.

const partial = `sdpgz3five4seven6fiveh
876mbxbrntsfm
fivek5mfzrdxfbn66nine8eight
554qdg
ninevsgxnine6threesix8
4fivehmg614five
three6sdnttwothree3
two26four2
586dntdbtmfourrjnjdzptcfrpr3
dgkclmseven8
onepeight8sqzkrvvn
ninednnsjeight5c9hkzkhrgzcz4
42pchdjlnsxr688pvlgsr
vmzkvb5six4fiveg2
517fourone7kthdrcxm
sevenfourjgtwocsqzfbsqvb9flrlzxpx
3jqdxrqqzhkgg2fourthree9four
qjgfbnqjeight4onejm84sevensix
pgvthree1six15nineoneone
56ninefivefhnmmh5fdqcvttpsjseven2
sixtrvj12twomq
2jmxzzm9xhxmndgbhjlblhsnine75
pckdqrp8pgnmkgv9onetwoxlk
73mrflhnfzfxjqrqznj2
tfourninegnjhhdzsix6sevenfive
35zrgthreetwonesz
9fivebstlx42
6threenine
threebscrccrt94four3gvqdkdtjphmnmmf2
3seventwo3jmzxfmcnvjbnsgbgktwo
vhljqhzpbtxcssix3dbvttwo
4ninefour6sixpccqltcpvh
5fourthreejngfour
33rgkkfiveeight4xq
sixklhpptnnk8qvgbdcn
3bdtsjdfbmv8eightseven9sixqgfcmfpcone
vhckknzlvcpfvttnmnk5zcvs1eightnine
qheightwophxbnlv5nine8bknvnkdbps
7eight3gccqdgrltpkpt
qvjqtqffvtp2six
eight5ntzknggp5
eightone6fourkf
vlksmsxsljlnhtwo3mrc3five
one2eight
bqnjmjsznc67tdvtpdt
8five57sixfive
one4zhhlncnbncvzrsbsslnh
nqdftnsevenonellvpsdhrnrtrdjhbqscpd78
1fivefourffm3eightlcssevenclsjtb
7mqqgglzqmpk415gcggplprone1
2jprlqkpb1sixhfbvzjrgsrpjzbhtgrhpfour2
9twotwoqlvkrkhjthree44shvjxkpjgzgphgprflvn
eightgsonefivefive2
7sixmpnbgtmzrdbfive41
tkrcfive2eight23four
vgbqvj5mjplnfdsqpfone2hpxz
kvl7onehdvvfdghbsngrgn
tlsbhjblnpdlrtfour6btjcfmgdvtfive
6qnfivehnt31qcpmnhx
onesnqrgxstfmzhtln5bnldmvlqzsh
fourgn5fourggbddjsj34zncxtmxxvsvs
4lnr6xjkpzdgvsevengplkjdjtns
hzfplpdt9
sf2twolj8
6zghkzbfdjctpfp1
eight65
tvzmxzstsixmkvjkjl6eightninefour
fivephplggzkmfivetjfourmvcpnjxfvg58eightwoc
1fivehpleightfivethree4
zeightwo8
1jfcztzr5sixoneshmlpgtwofour
3zksglknjmvqfqhfiveeight76onemldlltn
9four4vtg32srrbqfczmnxdchtbvc
csdb92sevenvsnxdbd
4sevenseven6
8two8rm3fkbsvphhdrznine
trp149zxzrkk
948two9ninenine
cbmfivetwoninekqbkhkddc3rlfxlfh
btvcshj4seven
964sjxonesixgcjxmtnine
nb83fivegxnvxxrstqnine
fgoneightljvnfour5gfsix4sevensixt
6one97
three3two3sixtwoeight
kxonesix59xtmbqd5
dfqfcbv5mjeight
nine2nqhrsvkvzzkkvnn6oneightlbq
eight8rztdlm
ttcfdskrxlqlggmgfourthree11two4eightwopgz
8seventwooneightfcj
bmt8nine
rjzkjlgone7four2cffkgq6eightccsmvxhkk
6qkdznvrcdltdgpn75vvmvf
tcjhrgtlsixjsrbxdnseven3hkd2pnklcmshsf
mzptwone7onethree4tzthree
1sixgnvzbhscjgcr1gxfzpm
15twoqzplbsmfcnznrgrnthreetwo4
six815eightbdrone5five
three9pp21h3hzzg`;

function sumString(param) {
  const lengthOfParam = param.length;
  const arrayOfBreakLineIndices = [];
  const rowArray = [];
  const arrayOfIntegers = [];
  const isolateInteger = (param) => {
    let item;

    // Using match with regEx to obtain the numbers.
    // Using the match() method to put those in an array
    const matches = param.match(/\d+/g);

    // Concatenating all elements in the match array.
    if (matches.length === 1) item = matches[0] + matches[0];
    else item = matches[0] + matches[matches.length - 1];

    // If the concatenated number (item) is greater than 2 digits long, take only the first and last digit.
    if (item.length > 2) item = item[0] + item[item.length - 1];

    // // Convert item from a string type to an integer type.
    // item = parseInt(item);
    // // console.log("item: ", item);

    return parseInt(item);
  };

  // Find the line breaks in the template literal. Push them into the arrayOfBreakLineIndices array.
  for (let index = 0; index < lengthOfParam; index++) if (partial[index] === String.fromCharCode(10)) arrayOfBreakLineIndices.push(index);
  // console.log("arrayOfBreakLineIndices: ", arrayOfBreakLineIndices);

  // Isolate each row using the break line points from the arrayOfBreakLineIndices array. Push each row into the rowArray array.
  const lengthArrayOfBreakLineIndices = arrayOfBreakLineIndices.length;
  rowArray.push(param.slice(0, arrayOfBreakLineIndices[0]));
  for (let index = 0; index < lengthArrayOfBreakLineIndices - 1; index++) {
    rowArray.push(param.slice(arrayOfBreakLineIndices[index] + 1, arrayOfBreakLineIndices[index + 1]));
  }
  rowArray.push(param.slice(arrayOfBreakLineIndices[lengthArrayOfBreakLineIndices - 1] + 1, lengthOfParam));
  // console.log("rowArray: ", rowArray);

  //   Using the rowArray array, generate an array of the integers we're interested in summing.
  for (let index = 0; index < rowArray.length; index++) arrayOfIntegers.push(isolateInteger(rowArray[index]));
  console.log("arrayOfIntegers: ", arrayOfIntegers);

  // Summing the values of the arrayOfIntegers array.
  const callBack = (accumulator, current) => accumulator + current;
  return arrayOfIntegers.reduce(callBack);
}
console.log(sumString(partial));
// sumString(partial);
