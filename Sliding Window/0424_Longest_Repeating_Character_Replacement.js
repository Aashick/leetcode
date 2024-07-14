/*
Example 1:
Input: s = "XYYX", k = 2
Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Example 2:
Input: s = "AAABABB", k = 1
Output: 5
*/

// * Time O(n) | Space O(1)
class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let charCount = new Map();
    let l = 0;
    let maxF = 0;
    let maxLength = 0;

    for (let r = 0; r < s.length; r++) {
      charCount.set(s[r], (charCount.get(s[r]) || 0) + 1);
      maxF = Math.max(maxF, charCount.get(s[r]));

      while (r - l + 1 - maxF > k) {
        charCount.set(s[l], charCount.get(s[l]) - 1);
        if (charCount.get(s[l]) === 0) charCount.delete(s[l]);
        l++;
      }

      maxLength = Math.max(maxLength, r - l + 1);
    }

    return maxLength;
  }
}
