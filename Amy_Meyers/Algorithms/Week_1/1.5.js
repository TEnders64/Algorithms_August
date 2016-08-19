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
// ###Shuffle
// Recreate the `shuffle(arr)` function built into JavaScript, to efficiently shuffle a given array’s values.
// Work in-place, of course. Do you need to return anything from your function?
function shuffle_homemade(arr){
  var len = arr.length;
  var next_rand = Math.ceil(Math.random()*len)-1
  var order = [next_rand];
  var arr_copy = [];
  console.log(arr_copy + ' is the original array')
  while(order.length < len){
    next_rand = Math.ceil(Math.random()*len)-1
    if(order.indexOf(next_rand) < 0){
      order.push(next_rand);
    }
  }
  console.log("Order is as follows: " + order)
  for(var i = 0; i < arr.length; i++){
    arr_copy.push(arr[order[i]]);
  }
  return(arr_copy) //new array needs to be returned
}
// var arr = [];
// randarray(arr,4,true,10);
// console.log(arr)
// console.log(shuffle_homemade(arr))

// ###Remove array
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given `([20,30,40,50,60,70],2,4)`, change to `[20,30,70]` and return it.
function removeValues(arr,indexStart,indexEnd){
  if( indexStart >= arr.length || indexEnd >= arr.length){
    return("Index point out of range.")
  }
  else{
    var values = [arr[indexStart],arr[indexEnd]];
    var new_arr = [];
    values = values.sort(function(a,b){return a - b});
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > values[0] && arr[i] < values[1]){
        new_arr.push(arr[i])
      }
    }
    return new_arr
  }
}
// var arr = [];
// randarray(arr,4,true,10);
// console.log(arr)
// console.log(removeValues(arr,1,3))

// ###Intermediate Sums
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array `[1,2,1,2,1,2,1,2,1,2,1,2,1,2]`, change it to `[1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6]`.
function intermediatSums(arr,n){
  var new_arr = [];
  var sum = 0; //keep track of n numbers before pushing sum and resetting
  var count = 1;
  for(var i = 0; i<arr.length; i++){
    new_arr.push(arr[i]) //push variable to new array
    sum += arr[i]
    if(count % n == 0){
      new_arr.push(sum)
      sum = 0;
    }
  count += 1;
  }
  if(sum != 0){
    new_arr.push(sum)
  }
  return new_arr;
}
// var arr = [];
// randarray(arr,12,false,1);
// console.log(arr)
// console.log(intermediatSums(arr,10))

// ###Double Trouble
// Create a function that changes a given array to list each existing element twice, retaining original order.
// Convert `[4,"Ulysses",42,false]` to `[4,4,"Ulysses","Ulysses",42,42,false,false]`.
function doubleTrouble(arr){
  var new_arr = [];
  for(var i = 0; i< arr.length; i++){
    new_arr.push(arr[i]);
    new_arr.push(arr[i]);
  }
  return new_arr;
}
// var arr = [];
// randarray(arr,3,true,600);
// console.log(arr)
// console.log(doubleTrouble(arr))
// ###Zip it
// Create a standalone function that accepts two arrays and combines their values sequentially into the first array, at alternating indices starting with the first array. Extra values from either array should be included afterward. Given `[1,2]` and `[10,20,30,40]`, change first array to `[1,10,2,20,30,40]`.
function zipIt(arr1,arr2){
  var arr1Pointer = 1;
  var old_arr1_length = arr1.length;
  var tmp_for_arr1 = [arr1[arr1Pointer], arr1[arr1Pointer + 1]];
  for(var i = 0; i < arr2.length; i++ ){
    console.log(old_arr1_length)
    if(i+1 < old_arr1_length){
      arr1[arr1Pointer] = arr2[i];
      arr1[arr1Pointer+1] = tmp_for_arr1[0];
      tmp_for_arr1[0] = tmp_for_arr1[1];
      arr1Pointer += 2
      tmp_for_arr1[1] = arr1[arr1Pointer];
    }
    else{
      arr1.push(arr2[i])
    }
  }
}
var arr1 = [0,1];
var arr2 = [];
randarray(arr2,2,false,500);
console.log(arr2)
zipIt(arr1,arr2)
console.log(arr1)
