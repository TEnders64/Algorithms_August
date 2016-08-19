//Shuffle an array
function shuffle(arr){
  //Let's just loop through an array, touching every item at least once and make a random swap
  //with another item in the array.  We can use Math.random to help us with this.
  for (var i = 0; i < arr.length; i++){
    //create a random number...Math.random() returns a number between 0 (inclusive) and 1 (non-inclusive)
    //and then let's multiple this by the length of our array so it provides the range we want.
    //but wait, this could leave us with a non-integer number, such as 2.4 or 6.8.  Let's use the Math library
    //again and call its floor() method to take any decimal number and force it to the next smallest integer.
    var randomDecimal = Math.random()*arr.length;
    var randomIndex = Math.floor(randomDecimal);
    //now let's take this randomIndex and do a swap with the item we're looking at currently.
    //we will have to use a temporary variable to do this. Why? We could lose our items otherwise.
    var temp = arr[i]; //saving the current item
    arr[i] = arr[randomIndex]; //reassigning the current index to the item at another random index. See why we need to save its previous value in temp?
    arr[randomIndex] = temp; //reassigning the random index to be whatever we looked at initially: temp, which is what arr[i] started as.
  }
  //no need to return the array as we manipulated it directly.
}
/**
* Testing area
* var arr1 = [0,1,2,3,4,5,6,7,8,9];
* shuffle(arr1);
* console.log(arr1);
*/

//Remove from array
//Now we are going to cut out items from an array, given the indices that they fall between
function remove(arr, start, end){
  var withinRange = 0;
  for (var i = 0; i < arr.length; i++){
    //very similar to filterRange and removeNegatives except what we accept is a bit different
    // the '||' stands for "OR"
    if (i < start || i > end){
      // copying accepted values, potentially overwriting other values we have rejected
      arr[withinRange] = arr[i];
      withinRange++; //increment our counter of accepted indexes
    }
  }
  //again we are chopping off the length of the array
  arr.length = withinRange;
}
/**
* Testing area
* var myArr = [10,20,30,40,50];
* remove(myArr, 2, 3);
* console.log(myArr);
*/

//Intermediate Sums
//More array manipulation!  So anytime we sum up 10 values in the array, we should shift all other values down by 1
//to make room for inserting the sum.  So, using a counter, we can check how many values we've added.  When we've added 10 values, we then shift
//all values from there one spot to the end.  We then reset our sum and counter to 0 and increment i an extra time (i++)
//The trick is what to do with the final values. If there are less than 10 values, we must sum and put this sum as the last value of the array.
function intermediates(arr){
  var sum = 0;
  var counter = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
    counter++;
    if (counter === 10){
      for (var j = arr.length-1; j > i; j--){
        arr[j+1] = arr[j];
      }
      arr[i+1] = sum;
      sum = 0;
      counter = 0;
      i++;
    }else if(i === arr.length - 1){ // this is the check which determines if we are on the last value in the array.
      //we will need to put the sum in the index one ahead of us.  NOW, the kicker is, if we do not specify a break statement (break;) or set i to arr.length,
      //our loop will continue to run longer than we want.  Why?  Because as we do arr[i+1] = sum, we are adding an element to the array, meaning our
      //initial for loop up top has one more value to check.  It will keep doing this until when? It will keep going until counter becomes 10 again!
      arr[i+1] = sum;
      i = arr.length; // could also do a break statement as well
    }
  }
}
/** Testing Area
* var myArr = [1,2,1,2,1,2,1,2,1,2,1,2,1,2];
* intermediates(myArr);
* console.log(myArr);
*/

//Double Trouble
//Similar to Intermediate Sums, we are going to perform shifts to the right, making the array twice as long as it starts out.
//For every value in the array, we are going to duplicate it, but we have to be careful when making the shifts, we don't look at the duplicated items again.
//To avoid this, we 'jump' the most recent duplication (after having shifted everything of course) by incrementing (i++) an extra time.
function doubleTrouble(arr){
  for (var i = 0; i < arr.length; i++){
    for (var j = arr.length-1; j > i; j--){
      arr[j+1] = arr[j]; // shift every element to the right by one from wherever i happens to be
    }
    arr[i+1] = arr[i]; // duplicating the value at i
    i++; // have i bump forward an extra 1
  }
}
/** Testing Area
* var myArr = [4,"Ulysses",42,false];
* doubleTrouble(myArr);
* console.log(myArr);
*/

//Zip it
//Take two arrays and 'zip' them up into the first array. Given [1,2] and [10,20,30,40], return [1,10,2,20,30,40]
function zipIt(arr1, arr2){
  var index1 = 0;
  var index2 = 0;
  //this while statement checks if index1 and index2 are still within the length of the arrays.  This means we can
  //shift arr1's values down, and insert arr2's values
  while (index1 < arr1.length && index2 < arr2.length){
    for (var j = arr1.length-1; j > index1; j--){
      arr1[j+1] = arr1[j]; // shift arr1 values to the right by 1
    }
    arr1[index1+1] = arr2[index2]; // insert arr2's value into arr1 at index+1
    index1 += 2; // jump 2 in arr1 so we can skip over the next value that was already in arr1
    index2 += 1; // increment normally in arr2
  }
  //let's account for the case where arr2 might have more values than arr1 initially
  while (index2 < arr2.length){
    arr1.push(arr2[index2]); // we can just push all the rest of arr2's values into the end of arr1
    index2++;
  }
}
/** Testing Area
* var myArr1 = [1,2];
* var myArr2 = [10,20,30,40];
* zipIt(myArr1, myArr2);
* console.log(myArr1);
*/
