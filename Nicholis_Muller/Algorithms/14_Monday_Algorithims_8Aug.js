// Here are today's challenges:

// Reverse array

// Given a numerical array, reverse the order of the values. The reversed array should have the same length, with existing elements moved to other indices so that the order of elements is reversed. Don’t use a second array – move the values around within the array that you are given.

// Remove negatives

// Implement removeNegatives() that accepts an array and removes any negative values from that array.


function revArray(arr){
    arr.reverse();
    console.log(arr);
}

function remNeg(arr){
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            delete(arr[i]);
        }
    }
    console.log(arr);
}

revArray([-3, -2, -1, 0, 2, 3, 4, 5, 6, 7]);
remNeg([-3, -2, -1, 0, 2, 3, 4, 5, 6, 7]);
