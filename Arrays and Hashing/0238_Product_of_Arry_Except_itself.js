/*
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

// * Time O(n) | Space O(n)
var productExceptSelf = function (nums) {
  const res = new Array(nums.length).fill(1);

  //Example nums [5, 6, 7, 8]
  console.log(res); // [ 1, 1, 1, 1 ]

  // prefix
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  console.log(res); // [ 1, 5, 30, 210 ]

  // postfix
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }

  console.log(res); // [336, 280, 240, 210];

  return res;
};

productExceptSelf([5, 6, 7, 8]);
