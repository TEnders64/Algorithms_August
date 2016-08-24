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
var myString = "   	helloworld 		\n"
console.log(myString.myConcat("hello", "world"));

// String.slice
//
// string.slice(start,end) - extract part of a string and return in a new one. Start and end are indices into the string, with the first character at index 0. End param is optional and, if present, refers to one beyond the last character to include.
//
// Bonus: include support for negative indices, representing offsets from string-end. Example: string.slice(-1) returns the string’s last character.
String.prototype.mySlice = function(start, end) {
	var newString = ""
	var string = this;
	if (!end) { end = string.length; }
	// if (end < start) { return this; }
	if (end > string.length) {
		end = string.length;
	}
	// console.log(string.length)
	for (var i = 0; i < string.length; i++) {
		if (i >= start && i <= end) {
			// console.log(string[i])
			// break;
		} else {
			newString += string[i]
		}
	}
	return newString;
}
// console.log(myString.mySlice(2,4));
// String.trim
//
// string.trim() - remove whitespace (spaces, tabs, newlines) from both sides, and return a new string.
//
// Example: "\n hellogoodbye\t ".trim() should return "hellogoodbye".
String.prototype.myTrim = function () {
	var newString = "";
	var oldString = this;
	var spaces = ['\s', '\t', '\n', ' ', '&nbsp;']
	for (var i = 0; i <= oldString.length; i++) {
		if (spaces.indexOf(oldString[i]) != -1) {
			// console.log('space')
		} else {
			newString = oldString.mySlice(0, i-1)
			// console.log(oldString);
			break
		}
	}
	for (var i = newString.length; i >= 0; i--) {
		if (spaces.indexOf(newString[i]) != -1) {
			// console.log('space')
		} else {
			newString = newString.mySlice(i)
			// console.log(newString);
			break
		}
	}
	return newString;
};
console.log(myString.myTrim())

// String.split
//
// string.split(separator,limit) - split string into array of substrings, returning the new array. Separator specifies where to divide substrings and is not included in any substring. If "" is specified, split string on every character. Limit is optional and indicates number of splits; additional post-limit items should be discarded.
//
// Note: existing string is unaffected.
String.prototype.mySplit = function(separator, limit) {
	var resultArray = [];
	var begin = 0;
	if (!limit) {
		limit = this.length;
	}
	if (separator !== ''){
		for (var i = 0; i < this.length; i++) {
			if (this[i] === separator) {
				resultArray.push(this.slice(begin,i));
				begin = i;
			}
		}
	} else {
		for (var i = 0; i < this.length; i++) {
			resultArray.push(this[i])
		}
	}
	return resultArray;
}
console.log(myString.mySplit(' '))

// String.search
//
// string.search(val) - search string for val (another string). Return index position of first match (-1 if not found).
String.prototype.mySearch = function(val) {
	var string = this;
	console.log(val[0])
	for (var i = 0; i < string.length; i++) {
		if (string[i] === val[0]) {
			for (var j = 0; j < val.length; j++) {
				if (val[j] !== string[i + j]) {
					return -1;
				}
			}
			return i;
		}
	}
	return -1
}
console.log(myString.mySearch('hel'))
