// String.concat
//
// string1.concat(str2,str3,...,strX) - add string(s) to end of existing one. Return new string.
//
String.prototype.myConcat = function(strings) {
	var newString = this;
	// console.log(this)
	for (var i = 0; i < arguments.length; i++) {
		newString += arguments[i];
	}
	return newString;
}
var myString = "helloworld"
console.log(myString.myConcat("hello", "world"));

// String.slice
//
// string.slice(start,end) - extract part of a string and return in a new one. Start and end are indices into the string, with the first character at index 0. End param is optional and, if present, refers to one beyond the last character to include.
//
// Bonus: include support for negative indices, representing offsets from string-end. Example: string.slice(-1) returns the string’s last character.
String.prototype.mySlice = function(start, end) {
	var newString = ""
	var string = this;
	if (end < start) { return this; }
	if (end > string.length) {
		end = string.length;
	}
	console.log(string.length)
	for (var i = 0; i < string.length; i++) {
		if (i >= start && i <= end) {
			console.log(string[i])
			// break;
		} else {
			newString += string[i]
		}
	}
	return newString;
}
console.log(myString.mySlice(2,4));
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
