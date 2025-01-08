func majorityElement(nums []int) int {
    var count, candidate int
    for _, x := range nums {
        if count == 0 {
            count, candidate = 1, x
        } else {
            if candidate == x {
                count++
            } else {
                count--
            }
        }
    }

    return candidate
}


// Boyer-Moore Voting Algorithm

// Time Complexity: O(n)
// Space Complexity: O(1)