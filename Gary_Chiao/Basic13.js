//print 1 - 255
for (var i = 1; i <= 255; i++){
	console.log(i);
}

//print odds 1-255
for(var i = 1; i <=255; i++){
	if(i % 2 == 1)
		console.log(i);
}

//print ints and sum 0-255
var x = 0;

for(var i = 0; i <=255; i++){
	console.log(i);
	x = x + i;
	console.log(x);
}

//iterate and print array
for(var i = 0;i <= array.length - 1; i++){
	console.log(array[i]);
}

//find and print max
var max = array[0];
for(var i = 1; i <= array.length - 1; i++){
	if(max < array[i])
		max = array[i];
}
console.log(max);

//get and print average
var sum = 0;

for(var i = 0; i <= array.length - 1; i++){
	sum = sum + array[i];
}

var avg = sum / array.length;
console.log(avg);

//array with odds
var array = [];
for(var i = 1; i <= 255; i++){
	if(i % 2 == 1)
		array.push(i);
}
console.log(array);

//square the values
for(var i = 0; i < array.length; i++){
    array[i] = array[i] * array[i];
}
console(array); 

//Greater than Y
var count = 0;
    
for(var i = 0; i < array.length; i++)
{
    if(array[i] > Y)
    	count = count + 1;
    	console.log(count);
    	console.log(array[i]);
}


//zero out negative numbers
for(var i = 0;i <= array.length - 1; i++){
	if(array[i] < 0)
		array[i] = 0;
} 

//Max, min, average
var max = array[0];
var min = array[0];
var sum = 0
    
for(var i = 0; i <= array.length-1; i++)
{
    if(max < array[i])
    max = array[i];
    if(min > array[i])
    min = array[i];
    sum = sum + array[i];
}
var avg = sum / array.length;
console.log(max);
console.log(min);
console.log(avg); 

//shift array values
for(var i = 0; i <= array.length - 1; i++){
	array[i] = array[i+1];
}
array[array.length-1] = 0;
console.log(array);

//swap string for array negative values
for(var i = 0; i <= array.length-1; i++){
	if(array[i] < 0)
		array[i] = "Dojo";
}
console.log(array);
