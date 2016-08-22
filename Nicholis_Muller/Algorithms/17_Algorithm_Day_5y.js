// Shuffle
// Recreate the shuffle(arr) function built into JavaScript, to efficiently shuffle a given array’s values. Work in-place, of course. Do you need to return anything from your function?

function shuffle(arr){

    for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        console.log(arr);

        //no need to return as it is implicit.
}

shuffle([1, 3, 5, 7, 23, 55]);

// Remove from array
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

function removeRange(arr, start, end) {

    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if( !(i >= start) || !(i <= end) ){
            arr[counter++] = arr[i];
            arr[counter++] = arr[i];
        }
    }
    arr.length = counter;
    console.log(arr);
}



removeRange([20,30,40,50,60,70],2,4);


// Intermediate Sums
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [, change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].

  function intSums(arr, n){

      var sum = 0;
      var temp = arr[n];
      var sum2 = 0;


      for (var i = 0; i < arr.length; i++) {
        if (i <= n-1) {
          sum += arr[i];
        }
      }

      for (var j = 0; j < arr.length; j++) {
        if (j >= n + 1 && j <= arr.length  ) {
          sum2 += arr[j]
          arr[j] = arr[j];
        }
      }

      arr[n] = sum;
      arr[arr.length] = temp;
      sum2 += temp;
      arr[arr.length] = sum2;

      console.log(arr);

}

intSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2], 10);

// Double Trouble
// Create a function that changes a given array to list each existing element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].

//   function doubleTrouble(arr, n){
//     var counter = 0;
//
//     for (var i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
//
//
//
//
// }
//
//
//
//
// doubleTrouble( [4, "Ulysses", 42, false], 2);



// Zip it
// Create a standalone function that accepts two arrays and combines their values sequentially into the first array, at alternating indices starting with the first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], change first array to [1,10,2,20,30,40].

// function zipIt(arr1, arr2){
//   var counter = 0;
//   var length2 = arr2.length-1;
//   var length1 = arr1.length-1;
//
//
//   for (var i = 0; i < arr1.length; i++) {
//     arr1[i]
//   }
//
//     console.log(arr1);
//
//
//
//
//
// }
// zipIt([1,2], [10,20,30,40]);
