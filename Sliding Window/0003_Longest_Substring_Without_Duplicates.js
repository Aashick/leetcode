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
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let charSet = new Set(); // To keep track of unique characters
    let left = 0; // Left pointer of the sliding window
    let maxLength = 0; // Maximum length of substring without repeating characters

    for (let right = 0; right < n; right++) {
        // Loop continuously removes each element until the current element not exist in the Set() by moving left to the right
        // abccba // current element second 'c'
        // first 3 elements will be removed and goes out of loop
        // then the 2nd c will be added to the set 
        // now set has only one value - 'c'
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        
        // Add the current character to the Set
        charSet.add(s[right]);
        
        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
