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


// Time Complexity O(n) 
// where n is the number of elements in the array.

// Space Complexity O(1)
// since we are using a fixed amount of extra space.