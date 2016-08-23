// Coin Change with Object
// Given a number of U.S. cents, return the optimal configuration of coins, in an object.

//dont know about US money


// Max/Min/Average with Object
// Given an array, return an object containing the array’s max, min and average values.

function thingy(arr){
    var min = 0;
    var max = 0;
    var sum = 0;
    var avg = 0;

    for (var i = 0; i < arr.length; i++) {
         if(arr[i] > max){
             max = arr[i];
             min = max;
         }
         sum += arr[i];
     }
    for (var j = 0; j < arr.length; j++) {
         if(arr[j] < min){
             min = arr[j];
         }
    }
    avg = sum / arr.length;

    console.log(myObject = {
        min: min,
        max: max,
        avg: avg
    });
}

thingy([5, 12, 17, 21, 35, 2]);


// Zip Arrays into Map
// Associative arrays (Javascript objects) are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.

function mapZip(arr1, arr2){

    var obj = {};
    var counter = 0;


    while (counter <= arr1.length-1) {
        obj[arr1[counter]] =  arr2[counter];
        counter++;
    }

console.log(obj);

}

mapZip(["abc", 3, "yo"], [42, "wassup", true]);



















// Invert Hash
// Associative arrays are also called hashes. Build invertHash(assocArr) to convert hash keys to values, and values to keys. Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.
