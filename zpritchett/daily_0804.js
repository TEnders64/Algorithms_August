/**********************************************
  Daily Algorithms - 08/04/2016
  Zach Pritchett
  Coding Dojo - August 2016
**********************************************/

// test bench
var myArray = [1,2,3,4,5,6];

console.log(myArray);
pushFront(myArray, 60);
console.log(myArray);
var val = popFront(myArray);
console.log(val, myArray);

// insert value at the beginning of array
function pushFront(arr, val) {
    var origLength = arr.length;

    // scoot everything over
    for (var i = origLength - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }

    // add new value to front
    arr[0] = val;
}

// remove first value from array
function popFront(arr) {
    var newArr = [];
    var frontVal = arr[0];

    // scoot everything over
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    arr.length--;

    return frontVal;
}
