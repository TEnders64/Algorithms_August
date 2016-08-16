// Array: Rotate

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2].

// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.


// function rotateArr(arr, shiftBy) {
//
//
//
//     var first = 0;
//     var last = arr.length - 1;
//     var move = arr.length - shiftBy;
//
//
// console.log(arr);
//
//
// }
//
//
//
//
//
// rotateArr([1, 2, 3], 1)


// Array: Filter Range
// Alan is good at breaking secret codes. One tool is to eliminate numbers he knows are outside a certain specific range. Given array and values min and max, remove array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max) {
var counter = 0;

    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] === min || arr[i] === max)
        {
            arr[counter++] = arr[i];
        }
        console.log(arr);
    }

    arr.length = counter;
    console.log(arr);
}


filterRange([3, 2, 1, 4, 5], 2, 4 );
filterRange([3, 32, 55,  22, 18, 17, 16, 323, 350, 380], 22, 16 );
