//Rotate an array by an offset.  We will do this in place, meaning no extra arrays
//Example: ([1,2,3], 1) => [3,1,2]
//Level 1
function rotateArr(arr, shiftBy){
  //let's set up a for loop that is going to perform the same operation
  //for as many times that we want to shift by.
  for (var i = 0; i < shiftBy; i++){
    //here's the operation: let's take the value off the end, and place it in the front.
    //meanwhile, we shift all values in the array over toward the end.
    //var end is going to hang onto our last value in the array.
    var end = arr[arr.length-1];
    //shifting operation for as many values that are in the array minus one.
    for (var j = arr.length-1; j > 0; j--){
      arr[j] = arr[j-1]; // <-- shifting
    }
    //place the former last value at the front.
    arr[0] = end;
  }
  return arr;
}

//Level 2 - Allow for a negative shiftBy value
function rotateArr(arr, shiftBy){
  //let's check if shiftBy is positive and then carry one with the same process
  if (shiftBy > 0){
    for (var i = 0; i < shiftBy; i++){
      var end = arr[arr.length-1];
      for (var j = arr.length-1; j > 0; j--){
        arr[j] = arr[j-1]; // <-- shifting
      }
      arr[0] = end;
    }
  }else{ // the else catches all other situations with shiftBy is not greater than 0, so this includes 0 and all negative numbers
    // okay, we are dealing with a negative number now, let's multiply by -1 or get the absolute value
    shiftBy = shiftBy * -1;
    for (var i = 0; i < shiftBy; i++){
      //But let's shift the other direction, taking the first value and moving it to the end, shifting all values left in between.
      var end = arr[0];
      for (var j = 0; j < arr.length-1; j++){
        arr[j] = arr[j+1];
      }
      arr[arr.length-1] = end; //The former first value is now the last.
    }
  }
  return arr;
}

//Level 3 Minimize Memory Usage
//What minimizing memory usage means is, let's avoid taking up space

//Level 4 Minimize the Touches of Each Element
//What this means is 'try to avoid shifting every single element more than once'

//Filter Range: Taking in an array, let's filter out the numbers that don't fall within the min or max.
//The trick is to do this in place, so we don't create a new array to help us out.
//If we were allowed to create a new array, we could simply ask one question of every value in the array, "are you between the min and max?"
//...and push that value into the new array and return that new array.
//How do we do this without creating a new array?
function filterRange(arr, min, max){
  //let's keep a counter that will track how many numbers fall within our range.
  var withinRange = 0;
  //we know for a fact that our resulting array will only contain the values that are within the min and max (range), so the length of that array
  //will have a length that equals our withinRange counter...
  for (var i = 0; i < arr.length; i++){
    //let's check all values in the array with the for loop
    if (arr[i] <= max && arr[i] >= min){
      //...so we can just copy the values we want in the array (within range) and overwrite anything else.
      //if we kept an eye on what an array of [1,2,3,4,5] would look like if we filtered everything between 2 and 4...
      //we would see the array as [2,2,3,4,5], [2,3,3,4,5], and [2,3,4,4,5] at some point...
      //but we know we want to chop it down to just [2,3,4], which is length 3. What else has the value of 3? Look below.
      arr[withinRange] = arr[i];
      withinRange++; //increment our counter WHICH WILL ALSO BE THE LENGTH OF OUR ARRAY AT THE END!!!
    }
  }
  arr.length = withinRange; //Set the array length to our withinRange counter!
  return arr;
}
