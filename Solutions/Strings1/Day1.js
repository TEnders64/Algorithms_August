//day 1

// Remove blanks
// Create a function that, given a string, returns a string without blanks. Given " play that Funky Music ", returns a string containing "playthatFunkyMusic".

function removeBlanks(str) {
	var result = ""
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== " ") {
			result += str[i]
		}
	}
	return result
}
console.log(removeBlanks("It's the end of the world as we know it and I feel fine"))

// Get digits
// Create a JavaScript function that, given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str) {
	var numbers = [1,2,3,4,5,6,7,8,9,0];
	var result = "";
	for (var i = 0; i < str.length; i++) {
		if (str[i] in numbers) {
			result += str[i];
		}
	}
	return result;
}
console.log(getDigits("gd0d1f2g3dj45dvv6jk7yut8r9hj"))
