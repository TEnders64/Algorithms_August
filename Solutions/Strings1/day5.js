
// Book Index
// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of baroque fugues. He knows that some of those fugueing challenges will be less popular than others, so he needs a book index. Given a sorted array of pages, produce a book index string. Consecutive pages should form ranges separated by a dash. For [1,3,4,5,7,8,10], return the string "1, 3-5, 7-8, 10".
function bookIndex(array) {
	var returnString = ""
	var startPoint = undefined;
	for (var i = 0; i < array.length - 1; i++) {
		if (startPoint === undefined) {
			console.log(startPoint)
			if (array[i] === array[i + 1] - 1) {
				console.log('here')
				startPoint = i;
			} else {
				returnString += array[i] + ", ";
			}
		} else { //startpoint is defined
			if (array[i] === array[i + 1] - 1) {
				//keep going
				continue;
			} else {
				//close it out
				i++;
				returnString += array[startPoint] + "-" + array[i-1] + ", ";
				startPoint = i;
			}
		}
	}
	console.log('ending out', returnString, startPoint)
	if (startPoint === undefined) {
		console.log('last item', array[i])
		returnString += array[i];
	} else {
		if (startPoint === array.length - 1) {
			returnString += array[startPoint]
		} else {
			returnString += array[startPoint] + "-" + array[i];
		}
	}
	return returnString;
}
// console.log(bookIndex([1, 3, 4, 5, 6, 19, 20]))

// Common Suffix
// Lance is writing his opus: a tome of beat poetry. Always looking for a good rhyme, he seeks words ending with the same letters. Write a function that, given a word array, returns the largest common suffix (word-end). For inputs ["deforestation", "citation", "conviction", "incarceration"], return "tion" (not a very creative starting point). If it is ["nice", "ice", "baby"], return "".
// function commonSuffixUsingSlice(array) {
// 	var suffix = array[0]
// 	var index = 1
// 	for (var i = 1; i < array.length; i++) {
// 		//go through the other words in the array
// 		for (var j = 1; j < suffix.length + 1; j++) {
// 			//letter by letter, starting at the end, compare the two words
// 			console.log(array[i], suffix)
// 			console.log(array[i][array[i].length - j], "compared", suffix[suffix.length - j])
// 				if (array[i][array[i].length - j] === suffix[suffix.length - j]) {
// 					console.log('same', suffix[suffix.length - j])
// 				} else {
// 					console.log(array[i][suffix.length - j], "!==" ,suffix[suffix.length - j])
// 					suffix = suffix.slice(i-1)
// 					console.log('"asfa"', suffix)
// 				}
//
// 		}
// 	}
// return suffix;
// }
var words = ["nice", "dice", "mice", "splice"]

function commonSuffix(array) {
	var sharedEnding = ""
	var n = 1
	while (n < array[0].length){
		var letterToCheck = array[0][array[0].length - n]
		console.log(letterToCheck)
		for (var i = 1; i < array.length; i++) {
			if (array[i][array[i].length - n] !== letterToCheck) {
				console.log('mismatch', array[i][array[i].length - n], array[i], letterToCheck)
				return sharedEnding
			}
		}
		n++
		sharedEnding = letterToCheck + sharedEnding
	}
	return sharedEnding
}
console.log(commonSuffix(words))
