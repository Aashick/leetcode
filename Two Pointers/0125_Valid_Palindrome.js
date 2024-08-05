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
        let cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

        let left = 0
        let right = clean.length - 1

        while (left < right) {
            if (cleanString[left] !== cleanString[right])
                return false
            left++
            right--
        }

        return true
    }
}
