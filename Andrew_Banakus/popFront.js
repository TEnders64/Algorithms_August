/* Pop Front
Given array, remove and return the value
at the beginning of the array. Do this without
using any built-in array methods except pop(). */

function popFront(arr){
  console.log("Array in = " + arr);
  var firstVal = arr[0];
  for(var i = 0; i < arr.length-1; i++){
    arr[i] = arr[i+1];
    }
  arr.length = arr.length-1;
  console.log("New array = " + arr, "and the removed value is " + firstVal);
  return(arr, firstVal);
}
var arrRand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
popFront(arrRand);
