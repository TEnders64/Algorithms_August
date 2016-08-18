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
// ###Remove negatives
// Implement `removeNegatives()` that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order.
// * Additional: Don't use nested loops
function removeNegatives(arr){
  var countPositives = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
      arr[countPositives++]=arr[i];
    }
  }
  while(countPositives < arr.length){
    arr.pop()
  }
  return arr
}
// var arr = [];
// randarray(arr,10,true,10);
// console.log(arr)
// console.log(removeNegatives(arr))
// ###Second-to-last
// Return the second-to-last element of an array. Given `[42,true,4,"Liam",7]`, return `"Liam"`. If array is too short, return `null`.
function secondToLast(arr){
  if(arr.length >= 2){
    return arr[arr.length-2]
  }
  else{
    return("Null")
  }
}
// var arr = [];
// randarray(arr,1,true,10);
// console.log(arr)
// console.log(secondToLast(arr))

// ###Nth-to-last
// Return the element that is N-from-array’s-end. Given `([5,2,3,6,4,9,7],3)`, return `4`. If the array is too short, return `null`.
function nthToLast(arr,n){
  if(arr.length >= n){
    return arr[arr.length-n]
  }
  else{
    return("Null")
  }
}
// var arr = [];
// randarray(arr,10,true,10);
// console.log(arr)
// console.log(nthToLast(arr,4))

// ###Second largest
// Return the second-largest element of an array. Given `[42,1,4,Math.PI,7]`, return `7`. If the array is too short, return `null`.
function secondLargest(arr){
  if (arr.length >= 2){
    var count = 1;
    var sorted = arr.sort(function(a,b){return a - b});
    console.log(sorted)
    var max = sorted[arr.length-1];
    for(var i = 1; i< arr.length; i++){
      if(sorted[arr.length-1-i] < max){
        count++;
        return sorted[arr.length-1-i]
      }
    }
    if(count == 1){ //If all values are the same, return null
      return("null")
    }
  }
  else{
    return("null")
  }
}
// var arr = [];
// randarray(arr,2,true,10);
// console.log(arr)
// console.log(secondLargest(arr))

// ###Nth largest
// Given `arr` and `N`, return the Nth-largest element, where (N-1) elements are larger. Return `null` if needed.
function nthLargest(arr,n){
  if (arr.length >= n){
    var count = 1;
    var sorted = arr.sort(function(a,b){return a - b});
    var max = sorted[arr.length-1];
    for(var i = 1; i< arr.length; i++){
      if(sorted[arr.length-1-i] < max){
        count++;
        max = sorted[arr.length-1-i]
      }
      if(count == n){
        return sorted[arr.length-1-i]
      }
    }
    if(count <= n){ //If not enough unique values
      return("null")
    }
  }
  else{
    return("null")
  }
}
var arr = [];
randarray(arr,10,true,10);
console.log(arr)
console.log(nthLargest(arr,4))
