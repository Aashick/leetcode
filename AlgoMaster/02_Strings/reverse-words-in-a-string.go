func reverseWords(s string) string {
	// Step 1: Trim leading and trailing spaces
	s = strings.TrimSpace(s)
	
	// Step 2: Split the string into words
	words := strings.Split(s, " ")
	
	// Step 3: Filter out empty words
	filteredWords := []string{} // Changed here

	for _, word := range words {
		if word != "" {
			filteredWords = append(filteredWords, word)
		}
	}
	
	// Step 4: Reverse the order of words
	for i, j := 0, len(filteredWords)-1; i < j; i, j = i+1, j-1 {
		filteredWords[i], filteredWords[j] = filteredWords[j], filteredWords[i]
	}
	
	// Step 5: Join the words with a single space
	return strings.Join(filteredWords, " ")
}

// Trimming Spaces
// Splitting the String
// Filtering Empty Words
// Reversing the Order of Words
// Joining Words

// Time Complexity: O(n)
// Space Complexity: O(n)

// 151
// https://leetcode.com/problems/reverse-words-in-a-string/description/