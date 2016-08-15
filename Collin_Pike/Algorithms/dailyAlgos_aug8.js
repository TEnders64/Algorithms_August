//reverse an array
function reverseit(){
var x = 0;

for (var i = (arr.length -1); i > 0; i--){
if(x < i)
{
    temp = arr[x];
    arr[x] = arr[i];
    arr[i] = temp;
}
x++;
}
console.log(arr);
}

//remove negatives

function removeNeg(){

    var count = 0;
    for (var x = 0; x < arr.length; x++){
         if(arr[x] < 0){
           count++;
         }
      for (var i = 0; i < arr.length - 1; i++){
        if(arr[i] < 0){
            temp = arr[i];
            arr[i] = arr[i +1];
            arr[i +1] = temp;
        }
      }
    }
    arr.length = (arr.length - count);
    console.log(arr);
}
