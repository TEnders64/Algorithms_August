/*
Reverse array
Given a numerical array, reverse the order of the values.
The reversed array should have the same length,
with existing elements moved to other indices so
that the order of elements is reversed.
Don’t use a second array – move the values around
within the array that you are given. */



function reverse(arr){
    var len = arr.length;
    for(var i = 0; i < len; i++){
        arr[i + (len)] = arr[len-1-i];
    }
    for(i = 0; i < len; i++){
        arr[i] = arr[i+len];
    }
    arr.length = len;
    console.log(arr);
}
var arrRand = [9, 8, 7, 6, 5, 4, 3, 2, 1];
reverse(arrRand);
