/*
Example 1:
Input: nums = [2,20,4,10,3,4,5]
Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5].

Example 2:
Input: nums = [0,3,2,5,4,6,1,1]
Output: 7
*/

// * Time O(n⋅avg_length) | Space O(n)
// avg_length is the average length of consecutive sequences

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums)
        let longest = 0

        for (let n of nums) {
            if (!numsSet.has(n - 1)) {
                let curr = n
                let currLen = 1

                while (numsSet.has(curr + 1)) {
                    curr++
                    currLen++
                }

                longest = Math.max(longest, currLen)
            }
        }

        return longest
    }
}
