var arr = [-5, 8, 15, 20, 45];

// Print 1 - 255
function oneto255() {
    for (var idx = 1; idx <= 255; idx++) {
        console.log('Print 1 to 255:', idx);
    }

}
oneto255();

// Print all odd integers from 1 to 255.
function printodds() {
    var num = 1;
    while (num <= 255) {
        console.log('Odd Numbers:', num);
        num = num + 2;
    }

}
printodds();

// Print integers from 0 to 255, and with each integer print the sum so far.
function intSum() {
    var sum = 0;
    for (var num = 0; num <= 255; num++) {
        sum += num;
        console.log('Number:', num, 'Sum =', sum);
    }
}
intSum();

// Iterate through a given array, printing each value.
function iteArr() {
    for (var i = 0; i < arr.length; i++) {
        console.log('Array Value:', arr[i]);
    }

}
iteArr();

// Given an array, find and print its largest element.
function findMax() {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log('Max:', max);
}
findMax();

// Get and Print Average
function GetAvg() {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log('Average:', sum / arr.length);
}
GetAvg();

// Array with Odds
function arrOdds() {
    var odds = [];
    for (var i = 1; i <= 255; i++)
        if (i % 2 !== 0) {
            odds.push(i);
        }
    console.log('Array Odds:', odds);
}
arrOdds();

// Square each value in a given array, returning that same array with changed values.
function squArr() {
    var squ = [];
    for (var i = 0; i < arr.length; i++) {
        squ.push(arr[i] * arr[i]);
    }
    console.log('Array Squared:', squ);
}
squArr();

// Given an array and a value Y, count and print the number of array values greater than Y.
function grtY() {
    var arrVal = [-4, 22, 31, 55, 60]
    var Y = 32;
    var cnt = 0;
    for (var i = 0; i < arrVal.length; i++) {
        if (arrVal[i] > Y) {
            cnt += 1;
        }
    }
    console.log('Values Greater than Y:', cnt)
}
grtY();

// Return the given array after setting any negative values to zero.
function zeroOut() {
    var zarray = [-5,-25,20,-55];
    for (var i = 0; i < zarray.length; i++) {
        if (zarray[i] < 0) {
            zarray[i] = 0;
        }
    }
    console.log('Zeroed Out:', zarray)
}
zeroOut();

// Given an array, print the max, min and average values for that array.
function findMinMaxAvg(){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    console.log('Max:', max, 'Min:', min, 'Avg:', avg)
}
findMinMaxAvg();

// Given an array, move all values forward by one index, dropping the first and leaving a 0 value at the end.
function ShiftArrayValues(){
    var myarray = [5,10,25,88,100];
    for (var i = 1; i < myarray.length; i++){
        myarray[i-1] = myarray[i]
    }
    myarray[myarray.length-1]=0;
    console.log('Shift Array:', myarray);
}
ShiftArrayValues();
// Swap String For Array Negative Values

function SwapString(){
    var swaparray = [-5,-4,-2,5,20];
    for (var i = 0; i < swaparray.length; i++){
        if(swaparray[i] < 0){
            swaparray[i] = 'Dojo';
        }
    }
    console.log('Swap String:', swaparray)
}
SwapString();

//Push front
function pushNew(){
    var pusharr = [8,89,300,600];
    var val = 3;
    // run from 4 to 0
    for(var i = pusharr.length; i > 0; i --){
        // copies array values over until 0.
        pusharr[i] = pusharr[i-1];
    }
    //sets the array[0] to val which was same as array[1]
    pusharr[0] = val;
    console.log('Push:', pusharr)
}
pushNew();

// Pop front array
function popFront(){
                //0, 1 ,2 , 3
    var poparr = [22,45,66,99];

    for(var i = 0; i <poparr.length;i++){
        poparr[i] = poparr[i+1];
    }
    poparr.length = poparr.length - 1;
    console.log('Pop:', poparr)
}
popFront();
