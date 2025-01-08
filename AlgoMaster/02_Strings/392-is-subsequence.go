func isSubsequence(s string, t string) bool {
    i, j := 0, 0
    m, n := len(s), len(t)

    for i < m && j < n {
        if s[i] == t[j] {
            i++ // Move pointer for s
        }
        j++ // Always move pointer for t
    }

    return i == m // Check if all characters of s were found
}

// two-pointer technique

// Time Complexity: O(m+n)
// Space Complexity: O(1)