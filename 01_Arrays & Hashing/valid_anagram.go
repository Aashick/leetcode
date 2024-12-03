func isAnagram(s string, t string) bool {
    // s := "anagram"
    // t := "nagaram"
    // If the lengths of the strings differ, they cannot be anagrams
    if len(s) != len(t) {
        return false
    }

    // Create a frequency map for counting characters
    count := make(map[rune]int)

    // Iterate through both strings
    for i := 0; i < len(s); i++ {
        // Increment the count for character in string 's'
        count[rune(s[i])]++
        // Decrement the count for character in string 't'
        count[rune(t[i])]--
    }

    // Check if all frequencies are zero (indicating both strings have the same characters with same counts)
    for _, c := range count {
        if c != 0 {
            return false
        }
    }

    return true
}
