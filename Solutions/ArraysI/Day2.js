
// Reverse array
// Given a numerical array, reverse the order of the values. The reversed array should have the same length, with existing elements moved to other indices so that the order of elements is reversed. Don’t use a second array – move the values around within the array that you are given.
//
function reverseArray(arr) {
	for (var i = 0; i < Math.floor(arr.length / 2); i++) {
		var fromEnd = arr.length - 1 - i;
		var temp = arr[i];
		arr[i] = arr[fromEnd];
		arr[fromEnd] = temp;
	}
	return arr;
}
// console.log(reverseArray(array))

var negArr = [1,-2,3,-4,-5,6,-7,8]
// Remove negatives
// Implement removeNegatives() that accepts an array and removes any negative values from that array.
function removeNegatives(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		console.log(arr[i])
		if (arr[i] < 0) {
			arr[i] = arr[arr.length - 1];
			arr.pop();
			i++;
		}
	}
	return arr;
}
// console.log(removeNegatives(negArr))

// Remove negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order.
// Additional: Don't use nested loops
//
function removeNegativesInPlace(arr) {
	var count = 0;
	var pointer = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			arr[pointer] = arr[i]
			pointer++;
			count++;
		}
	}
	arr.length = count;
	return arr;
}
// console.log(removeNegativesInPlace(negArr))
