func singleNumber(nums []int) []int {
    // Step 1: XOR all elements to get the combined result of the two unique numbers
    xs := 0
    for _, x := range nums {
        xs ^= x
    }

    // Step 2: Find a bit that is set (this will be a differentiating bit)
    lb := xs & (-xs)

    // Step 3: Initialize variables to hold the two unique numbers
    a := 0

    // Step 4: Separate numbers into two groups based on the differentiating bit
    for _, x := range nums {
        if x&lb != 0 {
            a ^= x // Group where the differentiating bit is set
        }
    }
    
    // Step 5: The second unique number can be found by XORing 'xs' with 'a'
    b := xs ^ a

    return []int{a, b}
}


// Time Complexity: O(n)
// Space Complexity: O(1)