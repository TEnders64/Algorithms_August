/**********************************************
  The Basic 13 - Algorithm Practice
  Zach Pritchett
  Coding Dojo - August 2016
**********************************************/

// store algorithm titles to be printed as we go
var titleIndex = 0;
var titles = [
  'Print 1-255',
  'Print Odds 1-255',
  'Print Ints and Sum 0-255',
  'Iterate and Print Array',
  'Find and Print Max',
  'Get and Print Average',
  'Array with Odds',
  'Square the Values',
  'Greater than Y',
  'Zero Out Negative Numbers',
  'Max, Min, Average',
  'Shift Array Values',
  'Swap String For Array Negative Values'
];

// Print 1-255
console.log(titles[titleIndex]);
for (var i = 1; i <= 255; i++) {
  console.log(i);
}
printSeparator();


// Print Odds 1-255
titleIndex++;
console.log(titles[titleIndex]);
for ( var i = 1; i <= 255; i++) {
  i % 2 !== 0 && console.log(i);
}
printSeparator();


// Print Ints and Sum 0-255
titleIndex++;
console.log(titles[titleIndex]);
var sum = 0;
for ( var i = 1; i <= 255; i++) {
  sum += i;
  console.log(i, sum);
}
printSeparator();


// Interate and Print Array
titleIndex++;
console.log(titles[titleIndex]);
var arr = [1,2,3,4,5,6,7,8];
for ( var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// Find and Print Max
titleIndex++;
console.log(titles[titleIndex]);
var arr = [20,56,8,135,7,1,-5,78];
var max = arr[0];
for (var i = 0; i < arr.length; i++) {
  max = arr[i] > max  ? arr[i] : max;
}
console.log(max);
printSeparator();


// Get and Print Average
titleIndex++;
console.log(titles[titleIndex]);
var arr = [20,56,8,135,7,1,-5,78];
var sum = 0, avg = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
avg = sum / arr.length;
console.log(avg);
printSeparator();


// Array With Odds
titleIndex++;
console.log(titles[titleIndex]);
var arr = [];
for (var i = 1; i < 255; i++) {
  i % 2 !== 0 && arr.push(i);
}
console.log(arr);
printSeparator();


// Square the Values
titleIndex++;
console.log(titles[titleIndex]);
var arr = [20,56,8,135,7,1,-5,78];
for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * arr[i];
}
console.log(arr);
printSeparator();


// Greater than Y
titleIndex++;
console.log(titles[titleIndex]);
var arr = [20,56,8,135,7,1,-5,78];
var Y = 42, count = 0;
for (var i = 0; i < arr.length; i++) {
  arr[i] > Y && count++;
}
console.log(count);
printSeparator();


// Zero Out Negative Numbers
titleIndex++;
console.log(titles[titleIndex]);
var arr = [20,56,8,135,7,1,-5,78];
for (var i = 0; i < arr.length; i++) {
  arr[i] < 0 && (arr[i] = 0);
}
console.log(arr);
printSeparator();


// Max, Min, Average
titleIndex++;
console.log(titles[titleIndex]);
var arr = [20,56,8,135,7,1,-5,78];
var max = arr[0], min = arr[0], sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
  min = arr[i] < min ? arr[i] : min;
  max = arr[i] > max ? arr[i] : max;
}
console.log(max, min, sum / arr.length);
printSeparator();


// Shift Array Values
titleIndex++;
console.log(titles[titleIndex]);
var arr = [20,56,8,135,7,1,-5,78];
for (var i = 1; i < arr.length; i++) {
  arr[i - 1] = arr[i];
}
arr[arr.length - 1] = 0;
console.log(arr);
printSeparator();


// Swap String for Array Negative Values
titleIndex++;
console.log(titles[titleIndex]);
var arr = [20,56,8,135,7,1,-5,78];
for (var i = 1; i < arr.length; i++) {
  arr[i] < 0 && (arr[i] = 'Dojo');
}
console.log(arr);
printSeparator();


/*******************************************
  Helper Functions and Such
*******************************************/

function printSeparator() {
  console.log('-----------------------');
}
