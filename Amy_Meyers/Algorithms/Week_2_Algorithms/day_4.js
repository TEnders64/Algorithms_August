// Recreate these built-in functions from JavaScript’s string library:

// String.concat
// string1.concat(str2,str3,...,strX) - add string(s) to end of existing one. Return new string.
function my_concat(arr1,arr2){
  for(var i = 0; i< arr2.length; i++){
    arr1.push(arr2[i])
  }
}
// var arr1 = [1,2,3,4]
// console.log("arr1 before: " + arr1)
// var arr2 = [5,6,7,8]
// console.log("arr2: " + arr2)
// my_concat(arr1,arr2)
// console.log("arr1 after: " + arr1)

// String.slice
// string.slice(start,end) - extract part of a string and return in a new one. Start and end are indices into the string, with the first character at index 0. End param is optional and, if present, refers to one beyond the last character to include.
function my_slice(arr,start,end = arr.length){
  var arr_resp = [];
  if(end > arr.length){
    end = arr.length;
  }

  if(start >= 0){
    for(var i = start; i< end; i++){
      arr_resp.push(arr[i])
    }
  }
  else{
    for(var i = end - 1; i >= end + start; i--){
      arr_resp.push(arr[i])
    }
  }
  return arr_resp
}
// Bonus: include support for negative indices, representing offsets from string-end. Example: string.slice(-1) returns the string’s last character.

// var arr = [0,1,2,3,4,5,6,7,8,9]
// console.log("array to slice: " + arr)
// console.log("Slicing from 0 to 2:")
// console.log(my_slice(arr,0,2))
// console.log("when my_slice(arr,-3) is ran: ")
// console.log(my_slice(arr,-3))
