/*
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

// * Time O(n) | Space O(1)
function productExceptSelf(nums) {
    const length = nums.length;
    const result = new Array(length);

    // Step 1: Compute the prefix products
    result[0] = 1;
    for (let i = 1; i < length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // Step 2: Compute the suffix products and update result array
    let suffixProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return result;
}

productExceptSelf([5, 6, 7, 8]);
