/*
Example 1:
Input: s = "zxyzxyz"
Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:
Input: s = "xxxx"
Output: 1
*/

// * Time O(n) | Space O(min(m,n))
// m - size of the character set (typically 256 for ASCII characters)
// n - length of the string s
class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let l = 0;
    let res = 0;

    for (let r = 0; r < s.length; r++) {
      while (charSet.has(s[r])) {
        charSet.delete(s[l]);
        l++;
      }
      charSet.add(s[r]);
      res = Math.max(res, r - l + 1);
    }

    return res;
  }
}
