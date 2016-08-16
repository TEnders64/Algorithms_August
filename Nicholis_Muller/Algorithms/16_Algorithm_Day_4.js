// Remove negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order.
// Additional: Don't use nested loops

function removeNegatives(arr){

    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            arr[counter++] = arr[i];
        }
        console.log(arr);
    }
    arr.length = counter;
    console.log(arr);
}

// removeNegatives([9, 1, -4, 5, 13, -2, -8]);


// Second-to-last
// Return the second-to-last element of an array. Given [42,true,4,"Liam",7], return "Liam". If array is too short, return null.
// Nth-to-last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

function secondLast(arr, n){

    var length = parseInt(arr.length);
    var index = parseInt(-n);


    console.log(arr[length + index]);

}

secondLast([42,true,4,"Liam",7], 2);
secondLast([5,2,3,6,4,9,7],3);
