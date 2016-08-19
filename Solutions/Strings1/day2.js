// Parens Valid
// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false.
var yes = "Y(3(p)p(3)r)s"
var no = "N(0(p)3"
function parensValid(str) {
	var opens = 0;
	var closes = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "(") {
			opens++;
		}
		if (str[i] === ")") {
			closes++;
		}
		if (closes > opens) {
			return false;
		}
	}
	if (opens !== closes) {
		return false;
	} else {
		return true;
	}
}
// console.log(parensValid(no))

// Is Palindrome
// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation and capitalization) the letters are the same from back to front. Create a function that returns a boolean indicating whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.
// Next, ignore white space (spaces, tabs, returns), capitalization and punctuation.
var palindrome = "racecarracecar"
var oddPalindrome = "abcdedcba"
var notAPalindrome = "racercar"
function isPalindrome(str) {
	for (var i = 0; i < Math.floor(str.length / 2); i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
// console.log(isPalindrome(palindrome))

// Is Word Alphabetical
// Nikki, a queen of gentle sarcasm, loves the word facetiously. Lance helpfully points out that it is the only known English word that contains all five vowels in alphabetical order, and it even has a ‘y’ on the end! Nikki takes a break from debugging to turn and give him an acid stare that could only be described as arsenious. Given a string, return a boolean indicating whether all letters contained in that string are in alphabetical order.

function isAlphabetical(str) {
	// var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	str = str.toLowerCase()
	for (var i = 1; i < str.length; i++) {
		//actually evaluates the charCode of the letter
		if (str[i] < str[i - 1]) {
			return false;
		}
	}
	return true;
}
console.log(isAlphabetical("abcdEfghZ"))
