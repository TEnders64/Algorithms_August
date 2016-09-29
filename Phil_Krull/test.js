// 1. you have 20 minutes to do this exam.
// email it back to mhannon@codingdojo.com
// given a function logAllValuesFrom1ToX passed x print all values from 1 to x.
// example logAllValuesFrom1ToX(4); would console.log 1,2,3,4 (on separate lines)
var arr = ['dojo','ninja',5,4];
var array = [1,3,5,7,9,-2,-4,-6,-8];
function logAllValuesFrom1ToX(x){
  for(var i=1; i<=x; i++){
  console.log(i);
  }
}
console.log('------------------------');
logAllValuesFrom1ToX(50);
// 2.  given an array, using a for loop print all values in the arr.
// printAllValuesOfAnArray(['dojo','ninja',5,4]); would log
// dojo, ninja, 5 ,4
function printAllValuesOfAnArray(arr){
  for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}
console.log('------------------------');
printAllValuesOfAnArray(arr);
// 3.  return an array with odds 1 - 255;
function createAnArrayWithOdds(){
  var arr=[];
  for(var i=1; i<=255; i++){
    if(i % 2 !== 0){
      arr.push(i);
    }
  }
  return arr;
}
console.log('------------------------');
console.log(createAnArrayWithOdds(array));
// 4.  zero out negatives: given [1,4,-11,12,-1] return [1,4,0,12,0]
function zeroOutNegativeNumbers(arr){
  for(var i=0; i<arr.length; i++){
    if(arr[i]<0){
      arr[i]=0;
    }
  }
}
console.log('------------------------');
zeroOutNegativeNumbers(array);
console.log(array);
// 5. Greater than Y print and return the count of elements greater than y.
function greaterThanY(arr,y){
  var count = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i]>y){
      count++;
    }
  }
  return count;
}
console.log('------------------------');
console.log(greaterThanY(array, 4));
// 6. return the max of an array.
function findMax(arr){
  var max = arr[0];
  for(var i=1; i<arr.length; i++){
    if(arr[i]>max){
      max = arr[i];
    }
  }
  return max;
}
console.log('------------------------');
console.log(findMax(array));
// 7. get and print the average of an array
// you have to write the whole thing!
  function arrAverage(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
      sum+=arr[i];
    }
    console.log(sum/arr.length);
  }
	console.log('------------------------');
	arrAverage(array);
// 8. Shift array values: given an array move all the values forward by one index and replace the last with 0.
 function shiftArray(arr){
   for(var i=1; i<arr.length; i++){
     arr[i-1]=arr[i];
   }
     arr[arr.length-1]=0;
 }
 console.log('------------------------');
 shiftArray(array);
 console.log(array);
