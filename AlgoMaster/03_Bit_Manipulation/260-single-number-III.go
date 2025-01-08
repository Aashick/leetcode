func singleNumber(nums []int) []int {
    // Step 1: Compute the XOR of all elements
    xorResult := 0
    for _, num := range nums {
        xorResult ^= num
    }

    // Step 2: Find a differentiating bit (rightmost set bit)
    differentiatingBit := xorResult & -xorResult

    // Step 3: Initialize variables for the two unique numbers
    unique1, unique2 := 0, 0

    // Step 4: Partition numbers into two groups and find the unique numbers
    for _, num := range nums {
        if num & differentiatingBit != 0 {
            unique1 ^= num // Group with the differentiating bit set
        } else {
            unique2 ^= num // Group without the differentiating bit set
        }
    }

    return []int{unique1, unique2}
}

// Time Complexity: O(n)
// Space Complexity: O(1)