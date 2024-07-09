/*
Example 1:
Input: numbers = [1,2,3,4], target = 3
Output: [1,2]
*/

// * Time O(n) | Space O(1)
class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      let total = numbers[left] + numbers[right];

      if (total === target) return [left + 1, right + 1];
      else if (total < target) left++;
      else if (total > target) right--;
    }

    return [];
  }
}
