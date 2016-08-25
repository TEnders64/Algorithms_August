/*Sara is looking to hire an awesome web developer
and has received applications from various sources.
Her assistant alphabetized them but noticed some
 duplicates. Given a sorted array, remove duplicate
 values. Because array elements are already in order,
  all duplicate values will be grouped together.*/

function remDuplicates(arr){
var count = 0;
var j = 0;
for(var i = arr.length-1;  i >= 0; i--){
     if(arr[i] === arr[i-1]){
         count++;
         for(j = i; j < arr.length; j++)
            arr[j] = arr[j+1];
            console.log(arr);
        }
        console.log(arr);
    }
    arr.length = arr.length-count;
    console.log(count);
    console.log(arr);
    return arr;
}

var arrRand = [2, 2, 12, 12, 12, -2, 5, -6, -6, 5, 6, 6, 7];
remDuplicates(arrRand);
