//
// Coin Change with Object
// Given a number of U.S. cents, return the optimal configuration of coins, in an object.
function generateCoinChange(cents){
   var quarter = 0;
   var dime = 0;
   var nickel = 0;
   var penny = 0;

   while(cents > 0 ){
      if(cents / 25 >= 1){
         cents -= 25;
         quarter ++;
         continue;
      }
      else if(cents / 10 >= 1){
         cents -= 10;
         dime ++;
         continue;
      }
      else if(cents / 5 >= 1){
         cents -= 5;
         nickel++;
         continue;
      }
      else if(cents > 0){
         cents -= 1;
         penny++;
      }
      else{
         break;
      }
   }
   console.log(quarter + dime + nickel + penny, quarter, nickel, dime, penny);
}
generateCoinChange(241);


// Max/Min/Average with Object
// Given an array, return an object containing the array’s max, min and average values.
var array = [1,6,89,3,2,5,8,2,-20,5]
function minMaxAverage(arr) {
	var obj = {"min": arr[0] , "max": arr[0], "average": 0}
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > obj['max']) {
			obj['max'] = arr[i];
		} else if (arr[i] < obj['min']) {
			obj['min'] = arr[i];
		}
		obj['average'] += arr[i]
	}
	obj['average'] = obj['average'] / arr.length;
	return obj;
}
// console.log(minMaxAverage(array));

// Zip Arrays into Map
// Associative arrays (Javascript objects) are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.
function zipArrays(arr1, arr2) {
	//assuming our arrays will be the same length or arr1 will be longer
	var map = {}; //just a javascript object
	for (var i = 0; i < arr1.length; i++) {
		map[arr1[i]] = arr2[i];
	}
	return map;
}
console.log(zipArrays(["abc", 3, "yo"], [42, "wassup", true]))

// Invert Hash
// Associative arrays are also called hashes. Build invertHash(assocArr) to convert hash keys to values, and values to keys. Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.
var hash = {"name": "Zaphod", "charm": "high", "morals": "dicey"}
function invertHash(object) {
	for (key in object) {
		object[object[key]] = key;
		//set the value of the object at each key to be a new key, and set the value of that new key to be what used to be its key
		delete object[key];
		//get rid of the original key value pair from the object
	}
	return object;
}
console.log(invertHash(hash))
