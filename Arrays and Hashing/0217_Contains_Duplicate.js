/*
Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/**
 * Hash Set - Early Exit
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums, numsSet = new Set()) {
  for (const num of nums) {
    if (numsSet.has(num)) return true;

    numsSet.add(num);
  }

  return false;
};

/*
  // Hash Set
  // Time O(N) | Space O(N)
 var containsDuplicate = (nums) => {
  const numsSet = new Set(nums); 
  const isEqual = numsSet.size === nums.length;

  return !isEqual;
};
*/
