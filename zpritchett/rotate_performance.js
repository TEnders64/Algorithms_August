var cd = require('./cd_algo');
var _ = require('underscore');

// do some timing w/ massive arrays
var arraySize = 1000000;
var offset = 2000;
var arr1 = [];
var arr2 = [];

for (var i = 0; i < arraySize; i++) {
    arr1.push('item' + i);
    arr2.push('item' + i);
}

var start = new Date().getTime();
cd.rotateArray(arr1, offset);
var end = new Date().getTime();
var jsET = end - start;

start = new Date().getTime();
cd.rotateArrayZ(arr2, offset);
end = new Date().getTime();
var zET = end - start;

console.log(_.isEqual(arr1, arr2));
console.log("Shift/Unshift Version: " + jsET + 'ms');
console.log("InsertAt/RemoveAt Version: " + zET + 'ms');
