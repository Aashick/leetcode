package main

import "fmt"

func reverseString(s []byte) {
    left, right := 0, len(s)-1
    for left < right {
        // Swap the characters at left and right
        s[left], s[right] = s[right], s[left]
        left++
        right--
    }
}

func main() {
    // Input as a slice of bytes (which represents the string "hello")
    str := []byte("hello")
    
    // Reverse the string in place
    reverseString(str)
    
    // Output the reversed string
    fmt.Println(string(str)) // Output: "olleh"
}


 /*
Why []byte (Byte Slice)?
In Go, strings are immutable, meaning once you create a string, you cannot modify it directly. 
If you want to manipulate the characters (such as reversing them), 
you need to use a mutable data structure, like a slice.

Strings are immutable in Go, so when you want to modify the contents of a string, 
you have to create a new string, which can be inefficient, 
especially when performing multiple operations (like reversing).
Slices are mutable: Slices (such as []byte or []rune) allow you to modify their contents directly, 
which is ideal for operations like reversing, inserting, or deleting elements.

Slice Reference:
In Go, slices are reference types. This means that when you pass a slice into a function, 
you're passing a reference to the original slice, not a copy of it. 
Any changes you make to the slice inside the function will affect the original slice.

In the main function, "str" is the variable holding the string "hello" (converted to a []byte slice).
Inside the reverseString function, the slice "s" refers to this same underlying data (str).
 /

/*
Return string
by converting byte to string

func reverseString(s string) string {
    // Convert string to a slice of bytes to allow manipulation
    byteSlice := []byte(s)
    left, right := 0, len(byteSlice)-1
    for left < right {
        byteSlice[left], byteSlice[right] = byteSlice[right], byteSlice[left]
        left++
        right--
    }
    // Convert the modified byte slice back to a string
    return string(byteSlice)
}

func main() {
    str := "hello"
    reversedStr := reverseString(str)
    fmt.Println(reversedStr) // Output: "olleh"
}
/ 