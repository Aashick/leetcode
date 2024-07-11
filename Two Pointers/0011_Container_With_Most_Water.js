/*
Example 1:
Input: height = [1,7,2,5,4,7,3,6]
Output: 36

Example 2:
Input: height = [2,2,2]
Output: 4
*/

// * Time O(n) | Space O(1)
class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let maxArea = 0;
    let l = 0;
    let r = heights.length - 1;

    while (l < r) {
      let currArea = Math.min(heights[l], heights[r]) * (r - l);
      maxArea = Math.max(currArea, maxArea);

      if (heights[l] < heights[r]) {
        l++;
      } else {
        r--;
      }
    }

    return maxArea;
  }
}
