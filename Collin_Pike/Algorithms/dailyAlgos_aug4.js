
//Push Front
function pushFront(arr){
var x = 3;

var y = (arr.length);
arr[y] = x;
for (var i = arr.length; i >= 0; i--){
    temp = arr[arr.length - 1]
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
}
   arr[0] = arr[arr.length - 1];
   arr.length = (y+1);

   console.log(arr);
}
//Pop Front

function popFront(){
// var arr = [1,3,5,6];

for (var i = 0; i < arr.length - 1; i++){
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
}
var temp = arr[arr.length - 1];
  arr.length--;
console.log(temp);
}
