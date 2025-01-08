func firstMissingPositive(nums []int) int {
	n := len(nums)

	// Place each number in its correct position
	for i := 0; i < n; i++ {
		for nums[i] > 0 && nums[i] <= n && nums[i] != nums[nums[i]-1] {
			// Swap nums[i] with nums[nums[i]-1]
			nums[nums[i]-1], nums[i] = nums[i], nums[nums[i]-1]
		}
	}

	// Find the first missing positive
	for i := 0; i < n; i++ {
		if nums[i] != i+1 {
			return i + 1
		}
	}

	return n + 1
}

// in-place hashing or index mapping technique

// Time Complexity: O(n) 
// Space Complexity: O(1)

