/*
Example:
input = ["Java","script"]
output = "Javascript"

It should be possible to join strings and bring the individual strings back from that.

Things to consider:
1. Input can have integers and symbols within
2. Our plan is to add an integer(length of the string) with '#' before each string 
    so it will be easy to separate each string with the length added before
    "Java" will be "4#Java"
    "script" will be "6#script"
3. "4#Java6#script"
*/

//n: Number of strings in the input array strs.
//L: Total length of all strings combined in strs.

// * Time O(n) | Space O(L)
function encode(input) {
  return input.map((str) => str.length + "#" + str).join("");
}

// * Time O(L) | Space O(L)
function decode(str) {
  let i = 0;
  let res = [];
  while (i < str.length) {
    let delimeterIndex = str.indexOf("#", i);
    let digitLength = parseInt(str.substring(i, delimeterIndex));
    let start = delimeterIndex + 1;
    let end = start + digitLength;
    res.push(str.substring(start, end));
    i = end;
  }

  return res;
}

let input = encode(["Java", "script"]);
console.log(input); // 4#Java6#script

let output = decode(input);
console.log(output); // ["Java", "script"]
