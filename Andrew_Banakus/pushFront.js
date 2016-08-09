/*Push Front
Given array and an additional value,
insert this value at the beginning of the array.*/

function pushFront(arr, addVal){
  var value = addVal;
  for(var i = arr.length; i > 0; i--){
    arr[i] = arr[i-1];
  }
  arr[0] = value;
  console.log(arr);
}
var arrRand = [3, 5, 21, 5, 3, 6, 23];
pushFront(arrRand, 7);
