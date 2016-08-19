//THE BASIC 13
//number1 - Print1-255
function oneTo255(){
for (var i = 1; i <=255; i++){
  console.log(i);
  }
}
//number2 - Print Odds 1-255
function oddsTo255(){
for (var i = 1; i <=255; i++){
  if(i % 2 !==0)
  console.log(i);
  }
}
//number3 - Print Ints and Sum 0-255
function iSum(){
var sum = 0;
for (var i = 0; i <=255; i++){
  sum += i;
  console.log(i,sum);
  }
}
//number4 - Iterate and Print Array
function iandp(arr){
// var arr = [1,5,8];
for (var i = 0; i < arr.length; i++){
  console.log(arr[i]);
  }
}
//number5 - Find and Print Max
function printMax(arr){
// var arr = [1,5,8];
var max = arr[0];
for (var i = 1; i < arr.length; i++){
  if(arr[i] > max){
  max = arr[i];
  }
}
  console.log(max);
}
//number6 - Get and Print Avg
function avg(arr){
var arr = [2,6,6,2];
var sum = 0;

for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
    sum = sum/arr.length;
    console.log(sum);
}
//number7 - Array with Odds
function arrOdds(arr){
// var arr = []

for (var i = 0; i <=255; i++){
    if(i % 2 !==0)
    arr.push(i);
}
console.log(arr);
}
//number8 - Square the Values
function squareValues(arr){
// var arr = [2,4,6,7];

for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i]*arr[i];
}
console.log(arr);
}
//number9 - Greater than Y
function greaterY(arr){
// var arr = [2,4,6,7];
var Y = 5;
var sum = 0;

for (var i = 0; i < arr.length; i++){
    if(arr[i] > Y){
    sum++;
  }
}
console.log(sum);
}
//number10 - Zero Out Negative Numbers
function zeroOut(arr){
// var arr = [-2,4,-6,7];

for (var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        arr[i] = 0;
    }
}
console.log(arr);
}
//number11 - Max, Min, Average;
function allThem(arr){
// var arr = [2,4,6,8];
var max = arr[0];
var min = arr[0];
var sum = 0;

for (var i = 0; i < arr.length; i++){
    if (arr[i] > max){
        max = arr[i];
    }
    if (arr[i] < min){
        min = arr[i];
    }
    sum += arr[i];
 }
console.log(max, min, sum/arr.length);
}
//number12 _ Shift Array Values
function shiftArray(){

// var arr = [2,4,6,8];

for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i + 1];
}
arr[arr.length - 1] = 0;
console.log(arr);
}
//number13 - Swap String for Array Negative Values
function swapString(arr){
// var arr = [-2,4,-6,9];

for (var i = 0; i < arr.length; i++){
    if(arr[i] < 0)
    arr[i] = 'Dojo';
}
console.log(arr);
}
