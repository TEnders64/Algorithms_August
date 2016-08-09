//Insert at

function insert(arr,idx,value){
x = [1,3,5,7,9];
z = [];
for (i = 0; i <= arr.length; i ++){
    if (i < idx){
        z.push(arr[i]);
    }
    else if (i == idx) {
        z.push(value);
    }
    else if (i > idx) {
        z[i] = arr[i-1];
    }
}
console.log(z);
}
insert(x,3,10);

//remove at
var x = [1,3,5,7,9];
var idx = 3;
var save = x[3];
var z = [];

for (var i = 0; i < x.length; i++){
    if (i < idx){
        z.push(x[i]);
    }
    else if (i == idx) {
        console.log(save);
    }
    else if (i > idx) {
        z[i-1] = x[i];
    }
}
console.log(z);

//swap array pairs
function swap(arr){
for (var i = 0; i < arr.length; i++){
    if (i % 2 === 1){
        var temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1]= temp;
    }
}
console.log(arr);
}

swap([1,2,3,4,5,6,7]);

//Array Remove Duplicates

var x = [1,1,2,3,4,5,5,6,7,8,8,9,10]
var z = [];
for (var i = 0; i < x.length; i++){
    if (x[i] != x[i+1]){
        z.push(x[i]);
    }
}
console.log(z);
