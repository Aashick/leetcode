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

// i >> 1  (Right Shift)    For ex 2 as 0010 -->  [10 >> 1] --> 1 (removed the right most 1 digit that is 0 here)
// i & 1  (Bitwise AND with 1)  0010 --> (10 & 1) --> 0 (taken the right most 1 digit that is 0 here)


/*
for i := 1; i <= n; i++ {
        if i % 2 == 1 {
            result[i] = result[i-1] + 1
        } else {
            result[i] = result[i/2]
        }
} 
/

// 338
// https://leetcode.com/problems/counting-bits/description/

