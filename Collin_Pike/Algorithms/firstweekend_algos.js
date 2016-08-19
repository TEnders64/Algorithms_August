//InsertAt
function insertAt(arr,index,val){

for (var i = arr.length ; i > index; i--){
         arr[i] = arr[i - 1];
    }
        arr[index] = val;
        console.log(arr);
}
pushInto([1,3,6,5],3,2);

//Remove At
function removeAt(arr,index){

if (index <= (arr.length - 1)){

    for (index; index < arr.length - 1; index++){
            temp = arr[index];
            arr[index] = arr[index + 1];
            arr[index + 1] = temp;
     }
        arr.length--;
        console.log(arr);
}else{
    console.log('The index does not exist');
    }
}
removeAt([1,3,6,5],2)

//Swap Array Pairs

function swapArray(arr){
var temp = 0;

for (var i = 1; i < arr.length; i = i + 2){
            temp = arr[i - 1];
            arr[i -1] = arr[i];
            arr[i] = temp;

        }

    console.log(arr);

}
swapArray([1,2,3,4,5,6,7,8,9]);

//Remove Duplicates
function removeDups(arr){
var temp = 0;
var count = 0;
    for (var i = arr.length - 1; i > 0; i--){
        if(arr[i] === arr[i - 1]){
           for (var x = i; x < arr.length - 1; x++){
                temp = arr[x];
                arr[x] = arr[x + 1];
                arr[x + 1] = temp;

           }
          count++;
        }

    }
    arr.length -= count;
   if (arr[arr.length - 1] === arr[arr.length - 2]){
     arr.length--;
   }
    console.log(arr);
}
removeDups([1,3,3])










//
