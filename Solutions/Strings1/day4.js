// String.concat
//
// string1.concat(str2,str3,...,strX) - add string(s) to end of existing one. Return new string.
//

// String.slice
//
// string.slice(start,end) - extract part of a string and return in a new one. Start and end are indices into the string, with the first character at index 0. End param is optional and, if present, refers to one beyond the last character to include.
//
// Bonus: include support for negative indices, representing offsets from string-end. Example: string.slice(-1) returns the string’s last character.
// String.trim
//
// string.trim() - remove whitespace (spaces, tabs, newlines) from both sides, and return a new string.
//
// Example: "\n hellogoodbye\t ".trim() should return "hellogoodbye".
// String.split
//
// string.split(separator,limit) - split string into array of substrings, returning the new array. Separator specifies where to divide substrings and is not included in any substring. If "" is specified, split string on every character. Limit is optional and indicates number of splits; additional post-limit items should be discarded.
//
// Note: existing string is unaffected.
// String.search
//
// string.search(val) - search string for val (another string). Return index position of first match (-1 if not found).
