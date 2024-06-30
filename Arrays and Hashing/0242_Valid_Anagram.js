/*
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

*/

// * Time O(N) | Space O(N)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let countS = {};
  let countT = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  for (let c in countS) {
    if (countS[c] !== countT[c]) return false;
  }

  return true;
};
