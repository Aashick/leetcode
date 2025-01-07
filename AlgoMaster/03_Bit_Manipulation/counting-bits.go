func countBits(n int) []int {
    // Initialize a result array of size n+1.
    res := make([]int, n + 1)

    // Iterate over each number from 1 to n
    for i := 1; i <= n; i++ {
        // Calculate the number of 1 bits using previously computed results
        res[i] = res[i >> 1] + (i & 1)
    }
    return res
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// i >> 1  (Right Shift)
// i & 1  (Bitwise AND with 1)

// 338
// https://leetcode.com/problems/counting-bits/description/

