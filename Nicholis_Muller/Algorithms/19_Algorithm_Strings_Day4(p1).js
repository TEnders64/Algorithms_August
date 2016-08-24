// Recreate these built-in functions from JavaScript’s string library:
// String.concat
// string1.concat(str2,str3,...,strX) - add string(s) to end of existing one. Return new string.

function concatStr(){

    var s = '';
        for (var i=0; i < arguments.length; i++) {
            s += arguments[i];
        }

    console.log(s)
}

concatStr("Hello", "World", "this");


// String.slice

// string.slice(start,end) - extract part of a string and return in a new one. Start and end are indices into the string, with the first character at index 0. End param is optional and, if present, refers to one beyond the last character to include.

function stringSlice(str, start, end){

    var total = str.length;
    var start = str.indexOf(start);
    var final = '';

    if(end === undefined){
        final = str.substring(start, total);
        console.log(final);
    }else{
        var end = str.indexOf(end);
        final = str.substring(start, end);
        console.log(final);
    }

}

str = "Hello Nicholis Muller"

stringSlice(str, "N", "M");




// Bonus: include support for negative indices, representing offsets from string-end. Example: string.slice(-1) returns the string’s last character.
