/*Push Front
Given array and additional value, insert this value at the beginning of the array*/
function pushtofront(){
var x = [1,3,5];
var y = 10;
var z = [y];
for (var i < 0; i < x.length; i++){
    z.push(x[i]);
    }
console.log(z);
}
pushtofront();

//or
function anotherpush(){
var y = 10;
var z =[y];
for (var i = 1; i <= x.length; i++){
  	z[i] = x[i-1];
    }
console.log(z);
}
anotherpush();


/*Pop Front
Given array, remove and return the value at the beginning of the array.
Do this without using any built-in array methods except pop().*/
function popandreturn(){
            var x = [1,3,5];
            var y = x.pop();
            var z = [y];
            for (var i = 1; i <= x.length; i++){
    	           z[i] = x[i-1];
               }
               console.log(z);
        }
        popandreturn();
