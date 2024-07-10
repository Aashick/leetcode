/*
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

// * Time O(n^2) | Space O(log n)
class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > 0) break;

      if (nums[i] === nums[i - 1]) continue;

      let l = i + 1;
      let r = nums.length - 1;

      while (l < r) {
        let threeSum = nums[i] + nums[l] + nums[r];

        if (threeSum > 0) {
          r--;
        } else if (threeSum < 0) {
          l++;
        } else {
          res.push([nums[i], nums[l], nums[r]]);
          l++;
          r--;
          while (nums[l] === nums[l - 1] && l < r) {
            l++;
          }
        }
      }
    }

    return res;
  }
}
