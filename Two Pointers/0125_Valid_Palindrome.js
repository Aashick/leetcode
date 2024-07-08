/*
Example 1:
Input: s = "Was it a car or a cat I saw?"
Output: true

Example 2:
Input: s = "tab a cat"
Output: false
*/

// * Time O(n) | Space O(1)
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      if (s[left] !== s[right]) return false;

      left++;
      right--;
    }

    return true;
  }
}
