//The Basic 13

//Print 1-255

for (var i = 1; i <=255; i++){
    console.log(i);
}

//Print Odds 1-255
for (var i = 1; i <=255; i++){
    if (i % 2 === 1){
        console.log(i);
    }
}

//Print ints and sum 0-255
sum =0;
for (var i =0; i <= 255; i++){
    sum += i;
    console.log(i + ' ' + sum);
}

//Find and Print Max
var arr = [1,3,5];
var max = arr[0]
for(var i =0; i < arr.length; i++){
    if (max < arr[i]){
        max = arr[i];
    }
}
console.log(max)

//Get and Print Avg
var arr = [1,3,8];
var sum = 0;
for (var i = 0; i < arr.length; i++){
    sum += arr(i);
}
console.log(sum / arr.length);

//Array with Odds
//Create an array with all odd integers between 1 and 255;
var arr = [];
for (var i = 1; i <= 255; i++){
    if (i % 2 === 1){
        arr.push(i);
    }
}
console.log(arr);

//square values
var arr = [1,3,5];
for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i];
}
console.log(arr);

//Greater than Y
//Given an array and value y, count and print the number of array values greater than y
var arr = [1,3,5,7];
var Y = 3;
var count = 0;
for (var i = 0; i < arr.length; i++){
    if (arr[i] > Y){
        count++;
    }
}
console.log(count);

//Zero out negative numbers
var arr = [-2,3,5,-1,-6]
for (var i = 0; i < arr.length; i++){
    if (arr[i] < 0){
        arr[i] = 0;
    }
}
console.log(arr);

//Min Max Avg
var arr = [1,2,3,10,7,5,9]
var max = arr[0];
var min = arr[0];
var sum = arr[0];
for (var i = 1; i < arr.length; i++){
    if (max < arr[i]){
        max = arr[i];
    }
    if (min > arr[i]){
        min = arr[i];
    }
    sum += arr[i];
    avg = sum / arr.length
}
console.log(sum);
console.log(max, min, avg);

//Shift Array values
var arr = [1,2,3,4,5,6]
for (var i =0; i < arr.length; i++){
    arr[arr.length - 1] = 0;
    arr[i] = arr[i + 1];
}
console.log(arr);

//Swap string for array negative values
var arr = [-2,2,-3,7];
for (var i = 0; i < arr.length; i++){
    if arr[i] < 0{
        arr[i] = 'Dojo'
    }
}
console.log(arr);
