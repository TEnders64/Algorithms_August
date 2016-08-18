function randarray(arr,arr_length,negative_numbers,m_magnitude){
  for(var i = 0; i<arr_length; i++){
    rand = Math.random();
    if(negative_numbers == true){
      rand -= 0.5*2;
    }
    arr.push(Math.round(m_magnitude*rand))
  }
  return arr
}
// Coin Change with Object
// Given a number of U.S. cents, return the optimal configuration of coins, in an object.
function coin_optimizer(num){
  coins = {"half_dollar(s)": 50,
           "quarter(s)": 25,
           "dime(s)": 10,
           "nickel(s)": 5,
           "penny/pennies": 1}
  var tmp_num = num //So as not to overwrite the original value, as this is not specifically asked
  var coin_keys = Object.keys(coins)
  var coin_bucket = {'half_dollar(s)': 0,
                     'quarter(s)': 0,
                     'dime(s)': 0,
                     'nickel(s)': 0,
                     'penny/pennies': 0}
   var response = 'Your coin optimization for ' + num + ' cents as follows:'

  for(var i = 0; i<coin_keys.length; i++){
    coin_value = coins[coin_keys[i]]
    if(tmp_num % coin_value != tmp_num){
      while(Math.floor(tmp_num/coin_value) > 0){
        coin_bucket[coin_keys[i]] += 1
        tmp_num -= coin_value
      }
    }
  }
  for(var i = 0; i < coin_keys.length; i++){
    coin_count = coin_bucket[coin_keys[i]]
    if(coin_count != 0 ){
      response += "\n" + coin_count + " " + coin_keys[i]
    }
  }
  return response
}
// console.log(coin_optimizer(100))

// Max/Min/Average with Object
// Given an array, return an object containing the array’s max, min and average values.
function max_min_avg(arr){
  var response = {'max': NaN,
                  'min': NaN,
                  'avg': NaN}
  var max = arr[0]
  var min = arr[0]
  var count = arr[0]
  for(var i = 1; i<arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
    if(arr[i] < min){
      min = arr[i]
    }
    count += arr[i]
  }
  response['max'] = max
  response['min'] = min
  response['avg'] = count/arr.length
  return response
}
// var arr = [];
// randarray(arr,5,false,10);
// console.log(arr)
// console.log(max_min_avg(arr))
// Zip Arrays into Map
// Associative arrays (Javascript objects) are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.
function arrs_to_map(arr1,arr2){
  if(arr1.length != arr2.length){
    return "Array lengths are not equal. Function quitting."
  }
  var response = {}

  for(var i = 0; i< arr1.length; i++){
    response[arr1[i]] = arr2[i]
  }
  return response
}
// arr1 = ["abc", 3, "yo"]
// arr2 = [42, "wassup", true]
// console.log(arrs_to_map(arr1,arr2))

// Invert Hash
// Associative arrays are also called hashes. Build invertHash(assocArr) to convert hash keys to values, and values to keys. Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}
function invert_hash(arr_obj){
  var response_obj = {}
  var arr_keys = Object.keys(arr_obj)
  for(var i = 0; i< arr_keys.length; i++){
    response_obj[arr_obj[arr_keys[i]]] = arr_keys[i]
  }
  return response_obj
}
var arr_obj = {"name": "Zaphod", "charm": "high", "morals": "dicey"}
console.log(arr_obj)
console.log(invert_hash(arr_obj))
