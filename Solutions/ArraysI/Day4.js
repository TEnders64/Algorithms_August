// Remove negatives
// Implement removeNegatives() that accepts an array and removes any negative values from that array.
function removeNegatives(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		console.log(arr[i])
		if (arr[i] < 0) {
			arr[i] = arr[arr.length - 1];
			arr.length--;
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
// Second-to-last
// Return the second-to-last element of an array. Given [42,true,4,"Liam",7], return "Liam". If array is too short, return null.
//
function secondToLast(arr) {
	if (arr.length > 1){
		return arr[arr.length - 2]
	} else {
		return null;
	}
}
// console.log(secondToLast(array))
// Nth-to-last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.
function nthToLast(arr, n) {
	if (arr.length < (n)) {
		return null;
	} else {
		return arr[arr.length - n]
	}
}
// console.log(nthToLast([5,2,3,6,4,9,7], 3))
