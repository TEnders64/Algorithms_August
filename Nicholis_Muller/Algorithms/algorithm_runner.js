// JavaScript provides a built-in parseInt method.
//
// It can be used like this:
//
// parseInt("10") returns 10
// parseInt("10 apples") also returns 10
// We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.
//
// You are asked to write a myParseInt method with the following rules:
//
// It should make the conversion if the given string only contains a single integer value (and eventually spaces - including tabs, line feeds... - at both ends)
// For all other strings (including the ones representing float values), it should return NaN
// It should assume that all numbers are not signed and written in base 10


function myParseInt(str) {


    if(str.match(/^\d+$/)){
      console.log("valid int");
      console.log(parseInt(str));
      //valid integer
  }else if(str.match(/^\d+\.\d+$/)){
    console.log("valid float");
      //valid float
    }else{
      //not valid number
      console.log("NaN");
    }
}

myParseInt(" 10 ");
