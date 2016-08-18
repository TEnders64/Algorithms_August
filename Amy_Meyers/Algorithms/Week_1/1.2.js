function randarray(arr,arr_length,negative_numbers,m_magnitude){
  for(var i = 0; i<arr_length; i++){
    rand = Math.random();
    if(negative_numbers == true){
      rand = (rand-0.5)*2;
    }
    arr.push(Math.round(m_magnitude*rand))
  }
  return arr
}
// ###Divide and conquer
// If you looked for a word (“stentorian”, for example) in an actual book dictionary, would you turn to the first page, then the second page, then the third, examining all pages until you found the word? Of course not! You’d open to the center, finding the word “lightweight”. Undaunted by name-calling, and based on your alphabetical expertise, you look halfway to the books-end, where you find “ridicule”. Again you throw off this insult, looking even further toward the end of the book. The word you find is “terrible”, but like all Dojo students you don’t give up. Eventually you find your word “stentorian”, amidst stenographers and stepbrothers.

// This is an example of a technique known as “divide and conquer”. When you haven’t yet opened the dictionary, you don’t know much about which of the 3350 pages contains your word. After looking at page 1, all you really know is that the word is somewhere in the 2-3350 range – you haven’t narrowed it down much! If, instead of reading the first page, you glanced at a page in the middle (p.1675, let’s say), then with a single look you have cut the problem space in half. With a second glance at page 2513, you narrowed it even further and by looking at page 2900, you narrow the possibilities from 3350 pages down to “only” 400 pages: an 8x drop by checking only 3 pages. You can “divide and conquer” the problem space in this way, because words are listed in-order. Hold this thought for later….


// ###Reverse array
// Given a numerical array, reverse the order of the values. The reversed array should have the same length, with existing elements moved to other indices so that the order of elements is reversed. Don’t use a second array – move the values around within the array that you are given.
function ReverseArray(arr){
  var tmp = 0;
  var total= arr.length;
  for(var i = 0; i<(total/2); i++){
    tmp = arr[i];
    arr[i] = arr[total-1-i];
    arr[total-1-i] = tmp;
  }
  return arr
}
// var arr = [];
// randarray(arr,5,true,10);
// console.log(arr)
// console.log(ReverseArray(arr))

// ###Remove negatives
// Implement removeNegatives() that accepts an array and removes any negative values.
function removeNegatives(arr){
  var new_arr = [];
  for(var i = 0; i<arr.length; i++){
    if(arr[i] >= 0){
      new_arr.push(arr[i])
    }
  }
  return new_arr
}
// var arr = [];
// randarray(arr,5,true,10);
// console.log(arr)
// console.log(removeNegatives(arr))

// ###Array Min to Front
// Given an array of comparable values, move the lowest element to the array’s front, shifting backward elements that previously were ahead of it. Change `[4,2,1,3,5]` to `[1,4,2,3,5]`.
function RemoveAt(arr,pos){
  for(var i = pos+1; i<arr.length; i++){
    arr[i-1]=arr[i]
  }
  arr.pop();
  return arr
}
function minToFront(arr){
  var min = arr[0];
  var pos = 0;
  for(var i = 1; i<arr.length;i++){
    if(min > arr[i]){
      min = arr[i];
      pos = i;
    }
  }
  arr = RemoveAt(arr,pos);
  arr.unshift(min);
  return arr;
}
// var arr = [];
// randarray(arr,5,true,500);
// console.log(arr)
// console.log(minToFront(arr))

// ###Skyline Heights
// From lovely Burbank you have a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending directly away. Array `[-1,7,3]` would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given `[1,-1,7,3]` return `[1,7]`
function skylineHeights(arr){
  var can_see = [];
  var tallest = 0; //ground level
  for(var i = 0; i < arr.length ; i++){
    if(arr[i] > tallest){
      tallest = arr[i];
      can_see.push(tallest)
    }
  }
  return can_see
}
var arr = [];
randarray(arr,20,true,30);
console.log(arr)
console.log(skylineHeights(arr))
