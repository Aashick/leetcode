package main

import "fmt"

func twoSum(nums []int, target int) []int {
    // Create a map to store the numbers we've seen and their indices
    seen := make(map[int]int)

    // Iterate over the numbers in the array
    for i, num := range nums {
        complement := target - num

        // Check if the complement exists in the map
        if index, exists := seen[complement]; exists {
            // If it exists, return the indices of the two numbers
            return []int{index, i}
        }

        // Otherwise, store the current number and its index
        seen[num] = i
    }

    // Return an empty slice if no solution is found (though the problem guarantees there is always a solution)
    return nil
}

func main() {
    nums := []int{2, 7, 11, 15}
    target := 9

    result := twoSum(nums, target)
    fmt.Println(result) // Output: [0, 1]
}
