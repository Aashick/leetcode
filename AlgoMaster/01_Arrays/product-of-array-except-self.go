func productExceptSelf(nums []int) []int {
    n := len(nums)
    output := make([]int, n)

    left := 1
    for i := 0; i < n; i++ {
        output[i] = left
        left *= nums[i]
    }

    right := 1
    for i := n - 1; i >= 0; i-- {
        output[i] *= right
        right *= nums[i]
    }

    return output
}

// two-pass algorithm with prefix and suffix products.

// Time Complexity: O(n) 
// Space Complexity: O(1)

// 238
// https://leetcode.com/problems/product-of-array-except-self/description/