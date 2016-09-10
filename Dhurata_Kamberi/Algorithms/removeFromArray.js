// Remove from array
//
// Given array, and indices start and end, remove vals in that index range,
// working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4),
// change to [20,30,70] and return it.

function removeFromArray(arr,start,end){
  var count = 0;
  for (var i = start; i <= end; i++) {
    count++
  }
  for(var i = arr.length-1; i<arr.length; i++){
    arr[i-count] = arr[i];
  }
  arr.length = arr.length-count;
  return arr;
}
var arr1 = [20,30,40,50,60,70];
console.log(arr1);
console.log(removeFromArray(arr1,2,4));
