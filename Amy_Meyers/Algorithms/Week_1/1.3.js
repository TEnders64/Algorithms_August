function randarray(arr,arr_length,negative_numbers,m_magnitude){
  for(var i = 0; i<arr_length; i++){
    rand = Math.random();
    if(negative_numbers == true){
      rand = (rand-0.5)*2;
    }
    arr.push(Math.round(m_magnitude*rand))
  }
  return arr;
}
// var arr = [];
// randarray(arr,5,true,500);
// console.log(arr)

// ###Array: Rotate
// // Implement `rotateArr(arr, shiftBy)` that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2].
// * Second: allow negative shiftBy (shift L, not R).
// * Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// * Fourth: minimize the touches of each element.
function rotateArr(arr, shiftby){
  var new_arr = [];
  if (shiftby > 0) {
    var R = arr.length - shiftby; // x shift to right is the same as L-x shift to left
  }
  else if (shiftby == 0) {
    return arr;
  }
  else {
    var R = -shiftby;
  }
  for(var i = R; i < arr.length; i++){
    new_arr.push(arr[i]);
  }
  for(var i = 0; i < R; i++){
    new_arr.push(arr[i])
  }
  return new_arr;
  }

// var arr = [];
// randarray(arr,5,false,10);
// console.log(arr.sort())
// console.log(rotateArr(arr.sort(),-2))
function rotateSameArr(arr,shiftby){
  if (shiftby < 0) {
    var R = arr.length + shiftby; // x shift to right is the same as L-x shift to left
  }
  else if (shiftby == 0) {
    return arr;
  }
  else {
    var R = shiftby;
  }
  for(i = 0; i< R; i++){
    arr.unshift(arr[arr.length-1])
    arr.pop()
  }
  return arr
}
// var arr = [];
// randarray(arr,5,false,10);
// console.log(arr.sort())
// console.log(rotateSameArr(arr.sort(),2))
// ###Array: Filter Range
// Alan is good at breaking secret codes. One tool is to eliminate numbers he knows are outside a certain specific range. Given `array` and values `min` and `max`, remove array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
function RemoveAt(arr,pos){
  for(var i = pos+1; i<arr.length; i++){
    arr[i-1]=arr[i]
  }
  arr.pop();
  return arr
}
function filterRange(arr,min,max){
  for(var i = 0; i < arr.length; i++ ){
    console.log(arr)
    if(arr[i] >= min && arr[i] <= max){
      arr = RemoveAt(arr,i);
    }
  }
  return arr;
}
// var arr = [];
// randarray(arr,5,false,10);
// console.log(arr)
// console.log(filterRange(arr,0,3))

// ###Array: Concat
// Replicate JavaScript’s `concat()`. Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: `arrConcat( ['a','b'], [1,2] )` should return new array `['a','b',1,2]`.
function concat(arr1,arr2){
  var new_arr = arr1;
  for(var i = 0; i < arr2.length; i++ ){
    new_arr.push(arr2[i])
  }
  return new_arr;
}
var arr1 = [];
var arr2 = [];
randarray(arr1,5,false,10);
randarray(arr2,5,false,10);
console.log(arr1 + " and " + arr2)
console.log(concat(arr1,arr2))
