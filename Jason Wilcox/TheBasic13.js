//Print 1-255
for(i=1; i<256; i++)
{
	console.log(i);
}

//Print Odds 1-255
for(i=1; i<256; i =+ 2)
{
	console.log(i);
}

//Print Ints and Sum 0-255
var count = 0;
for(i=1; i<256; i++)
{
	count = count + i;
	console.log(i + ", " + count);
}

//Iterate & Print Array
var x = [1,2,3,4,5];
for (i=0; i<x.length; i++){
	console.log(x[i]);
}

//Find and Print Max
var x = [10,20,5,30,3,40,1.5,50,7];
var max = x[0];
for(i=1;i<x.length;i++){
	if(max < x[i])
	{
		max = x[i];
	}
}
console.log(max);

//Get and Print Average
var x = [10,20,5,30,3,40,1.5,50,7];
var sum = 0;
for(i=0;i<x.length;i++){
	sum = sum + x[i];
}
console.log(sum/x.length);

//Array with Odds
var x =[];
for(i=1;i<256;i=+2){
	x.push(i);
}
console.log(x)

//Square the variables
var x=[2,4,6,8,9];
for(i=0;i<x.length;x++)
{
	x[i] = x[i] * x[i];
}

console.log(x);


//Greater than Y
var y = greaterY([2,4,5,6,7,8,9], 4);

function greaterY(array, num)
{
	var count = 0;
	for(i=0; i<array.length; i++){
		if(array[i]>num)
		{
			count++;
		}
	}
	console.log(count);
	return array;
}

//Zero Out Negative Numbers
var arr = zeroNeg([2,4,-9,4,-8,7,7]);

function zeroNeg(arr)
{
	for(i=0;i<arr.length;i++)
	{
		if(arr[i]<0)
		{
			arr[i] = 0;
		}
	}
	console.log(arr)

	return arr;
}


//Min, Max, Average
baseStat([4,6,24,3,27,101,9]);

function baseStat(arr)
{
	var min = arr[0];
	var max = arr[0];
	var sum = 0;
	for(i=0;i<arr.length;i++)
	{
		if(arr[i]< min)
		{
			min = arr[i];
		}
		if(arr[i]> max)
		{
			max = arr[i];
		}
		sum = sum + arr[i];
	}

	console.log("Min: " + min + ", Max: " + max + ", Average" + sum/arr.length);
}


//Shift Array Values
var newArr = shiftArray([3,6,1,23,25,0,0,9]);

function shiftArray(arr)
{
	var shiftArr = [];
	for(i=1;i<arr.length;i++)
	{
		shiftArr[i-1] = arr[i];
	}
	shiftArr.push(0);
	console.log(shiftArr);
	return shiftArr;
}


//Swap String Array for negative Values
arraySwapDojo([3,4,5,-2,-3,-8,0,9,8]);

function arraySwapDojo(arr)
{
	for(i=0;i<arr.length;i++)
	{
		if(arr[i] < 0)
		{
			arr[i] = "Dojo";
		}
	}

	console.log(arr);
}
