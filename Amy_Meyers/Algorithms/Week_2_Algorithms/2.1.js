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
// ##Strings and Associative Arrays Day 1

// Strings are arrays of characters (more accurately, you can read individual characters the same way you read specific values in a numerical array, and these individual values are strings of length 1). However, you cannot write individual characters in a string in this same way. Once a string is defined, individual characters can be referenced by [ ] but not changed. Strings are immutable: they can be completely replaced in their entirety, but not changed piecewise. To manipulate string characters, you must split the string to an array, make individual changes, then join it.


// ###Remove blanks
// Create a function that, given a string, returns a string without blanks. Given " play that Funky Music ", returns a string containing "playthatFunkyMusic".
function remove_blanks(){
  var str = 'sometimes I wish I were a dinosaur';
  var new_str = ''
  for (var i = 0 ; i < str.length; i ++){
    if (str[i] != ' '){
      new_str += str[i];
    }
  }
  return new_str
}
// console.log(remove_blanks())

// ###Get digits
// Create a JavaScript function that, given a string, returns the integer made from the string’s digits. Given `"0s1a3y5w7h9a2t4?6!8?0"`, the function should return the **number** `1,357,924,680`
function alpha_stripping(str){
  var pass_values =[0,1,2,3,4,5,6,7,8,9];
  var new_str = '';
  for(var i = 0; i< str.length; i++){
    if(str[i] in pass_values){
      new_str += str[i]
    }
  }
  return new_str
}
// var arr = '0s1a3y5w7h9a2t4?6!8?0';
// console.log(arr)
// console.log(alpha_stripping(arr))

// ###Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given `" there's no free lunch - gotta pay yer way. "`, return `"TNFL-GPYW"`. Given `"Live from New York, it's Saturday Night!"`, return `"LFNYISN"`.
function acronym(str){
  var stop_values = [' ']; //use this if you are wanting to block out a list of strings
  var new_str = '';
  var pull_next = false;

  if(stop_values.indexOf(str[0]) != -1){
    pull_next = true;
  }
  else{
    new_str += str[0]
  }
  for(var i = 1; i < str.length; i++){
    if(pull_next && stop_values.indexOf(str[i]) == -1){
      new_str += str[i];
    }
    if(stop_values.indexOf(str[i]) != -1){
      pull_next = true;
    }
    else{
      pull_next = false;
    }
  }
  return new_str
}
// var str = " there's no free lunch - gotta pay yer way. "
// console.log(str);
// console.log(acronym(str))
// var str = "Live from New York, it's Saturday Night!"
// console.log(str);
// console.log(acronym(str))

// ###Integer to Roman Numerals
// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation:
// + I = 1
// + V = 5
// + X = 10
// + L = 50
// + C = 100
// + D = 500
// + M = 1000.
function intToRoman(num){
  if(num >= 4000){
    return "Number is greater than 4000. Goodbye."
  }
  var tmp_num = num;
  var roman_numeral = '';
  var numeral_object = {"M":1000,
                        "D":500,
                        "C":100,
                        "L":50,
                        "X":10,
                        "V":5,
                        "I":1
                      }
  var numeral_keys = Object.keys(numeral_object)
  for(var i = 0; i < numeral_keys.length; i ++){
    var roman_value = numeral_object[numeral_keys[i]]
    if(tmp_num/roman_value >= 1){
      if(Math.floor(tmp_num/roman_value) == 4){
        roman_numeral += numeral_keys[i] + numeral_keys[i-1]
        tmp_num = tmp_num % numeral_object[numeral_keys[i]]
      }
      else{
        var total_loops = Math.floor(tmp_num/roman_value)
        // console.log("We should have " + Math.floor(tmp_num/roman_value) + "\'" + numeral_keys[i] + "\'s")
        var count = 0;
        while(count < total_loops){
          roman_numeral += numeral_keys[i]
          tmp_num -= roman_value
          count ++
        }
      }
    }
    else{
      // console.log(tmp_num + " is not greater than " + roman_value + ". Moving on.")
    }
  } //Up to this point, this does not solve that 9 = IX and not VIV. This will be fixed below
  if(roman_numeral.indexOf('VIV') > -1){
    roman_numeral = roman_numeral.slice(0,roman_numeral.length-3)
    roman_numeral += 'IX'
  }

  return roman_numeral
}
for(var i = 340; i < 360; i++){
  console.log(intToRoman(i))
}
// Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.
