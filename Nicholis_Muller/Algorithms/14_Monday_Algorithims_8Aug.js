// Here are today's challenges:

// Reverse array

// Given a numerical array, reverse the order of the values. The reversed array should have the same length, with existing elements moved to other indices so that the order of elements is reversed. Don’t use a second array – move the values around within the array that you are given.

// Remove negatives

// Implement removeNegatives() that accepts an array and removes any negative values from that array.





// .reverse(); not allowed.

// function revArray(arr){
//     arr.reverse();
//     console.log(arr);
// }

// .unshift(); not allowed.

//  function revArray(arr){
//      var newArr = [];
//
//      for (var i = 0; i < arr.length; i++) {
//          newArr.unshift(arr[i]);
//      }
//      console.log(newArr);
// }

//tried a different approach to what was whown in the lecture.

function reverseArray(arr) {

    var first = 0;
    var last = arr.length - 1;

    while (first < last) {
        var i = arr[first];
        arr[first] = arr[last];
        arr[last] = i;

        first ++;
        last --;
    }

    console.log(arr);
}

// reverseArray([-3, -2, -1, 0, 2, 3, 4, 5, 6, 7]);

// .delete(); not allowed.

// function remNeg(arr){
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] < 0){
//             delete(arr[i]);
//         }
//     }
//     console.log(arr);
// }
//
//
// remNeg([-3, -2, -1, 0, 2, 3, 4, 5, 6, 7]);


function remNeg(arr) {
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            console.log('Counter before: ' + counter);
            arr[counter++] = arr[i];
            console.log('Counter after: ' + counter);
            console.log('arr is currently: ' + arr);
        }
    }
    arr.length = counter;
    console.log(arr);
}

remNeg([-3, 2, 10, -40, -23]);
