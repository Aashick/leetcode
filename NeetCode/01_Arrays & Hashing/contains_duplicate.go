package main

import "fmt"

func containsDuplicate(nums []int) bool {
    seen := make(map[int]bool) // Create a map to store unique elements
    for _, num := range nums {
        if seen[num] { // If the number is already in the map, we have a duplicate
            return true
        }
        seen[num] = true // Mark the number as seen
    }
    return false // No duplicates found
}

func main() {
    // Test the function
    nums := []int{1, 2, 3, 4, 5, 1}
    fmt.Println(containsDuplicate(nums)) // Should print true
    
    nums2 := []int{1, 2, 3, 4, 5}
    fmt.Println(containsDuplicate(nums2)) // Should print false
}