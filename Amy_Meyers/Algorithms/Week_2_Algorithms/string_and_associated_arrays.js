// Parens Valid
// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false.
function parens_valid(str){
  var parens = 0; //all '(' values will add 1, all ')' values will subtract 1
  for(var i = 0; i < str.length; i++){ //iterate through string
    if(str[i] == '('){
      parens += 1;
    }
    else if(str[i] == ')'){
      parens -= 1;
      if(parens < 0){
        return false //break out of function and return false because we've found more '(' than ')'
      }
    }
  }
  if(parens == 0){
    return true //at the end of the loop all ')' should equal all '(', making parens == 0
  }
  return false
}

// var str1 = "N(0(p)3" // should be false
// var str2 = "N(0)t )0(k" // should be false
// var str3 = "Y(3(p)p(3)r)s" //should be true
// console.log(parens_valid(str1)) //prints false
// console.log(parens_valid(str2)) //prints false
// console.log(parens_valid(str3)) //prints true


// Is Palindrome
// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation and capitalization) the letters are the same from back to front. Create a function that returns a boolean indicating whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.
// Next, ignore white space (spaces, tabs, returns), capitalization and punctuation.
function is_palindrome(str){
  // var new_str = str.toLowerCase() // remove case sensitivity
  // new_str.replace(/\W/g, '') //strip all non alphanumeric characters
  for(var i = 0; i < str.length/2; i++){
    if(str[i] != str[str.length-1-i]){
      return false
    }
    return true
  }
}
// var str1 = "Able was I, ere I saw Elba" //should return false
// var str2 = "Madam, I'm Adam" // should return false
// var str3 = "racecar" // should return true
// var str4 = "a x a" // should return true
// console.log(is_palindrome(str1)) //returns false
// console.log(is_palindrome(str2)) //returns false
// console.log(is_palindrome(str3)) //returns true
// console.log(is_palindrome(str4)) //returns true

// Is Word Alphabetical
// Nikki, a queen of gentle sarcasm, loves the word facetiously. Lance helpfully points out that it is the only known English word that contains all five vowels in alphabetical order, and it even has a ‘y’ on the end! Nikki takes a break from debugging to turn and give him an acid stare that could only be described as arsenious. Given a string, return a boolean indicating whether all letters contained in that string are in alphabetical order.
function is_alphabetical(str){
  var position = -1 //position will keep track of where index in string is
  var previous_position = -1 //defaults to a value not possible
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'

  //normalize all incoming strings to be lower case and remove all non alphanumeric characters
   str = str.toLowerCase()
   str = str.replace(/\W/g, '')

  for(var i = 0; i<str.length; i++){
    position = alphabet.indexOf(str[i])
    if (position < previous_position){
      return false
    }
    previous_position = position
  }
  return true
}
var str1 = '   aegilOps' //return true
var str2 = 'beefily' //return true
var str3 = 'billowy' //return true
console.log(is_alphabetical(str1))
console.log(is_alphabetical(str2))
console.log(is_alphabetical(str3))
