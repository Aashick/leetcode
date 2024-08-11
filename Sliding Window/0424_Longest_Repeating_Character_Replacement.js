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
    let frequencyMap = new Map(); // Map to store the frequency of characters in the current window.
    let l = 0;          // Left pointer of the sliding window.
    let maxFrequency = 0;         // Maximum frequency of any single character in the current window.
    let substringWindow = 0; // Length of the longest valid window found.

    for (let r = 0; r < s.length; r++) { // Iterate with the right pointer over the string.
      frequencyMap.set(s[r], (frequencyMap.get(s[r]) || 0) + 1); // Increment the count of the current character.
      maxFrequency = Math.max(maxFrequency, frequencyMap.get(s[r])); // Update maxFrequency to be the highest frequency of any character in the current window.

      while (r - l + 1 - maxFrequency > k) { // Check if the current window size minus the highest frequency exceeds k. (r - l + 1 => Current Window)
        frequencyMap.set(s[l], frequencyMap.get(s[l]) - 1); // Decrease the frequency count of the character at the left pointer.
        if (frequencyMap.get(s[l]) === 0) frequencyMap.delete(s[l]); // If the count drops to zero, remove the character from the map.
        l++; // Move the left pointer to the right to shrink the window.
      }

      substringWindow = Math.max(substringWindow, r - l + 1); // Update substringWindow to be the largest window size found so far.
    }

    return substringWindow; // Return the length of the longest valid window.
  }
}
