
// function alphabetString(str){
//
// ref = "abcdefghijklmnopqrstuvwxyz"
// str = str.replace(/\s+/g, '');
// str = str.replace(/[^\w\s]|_/g, "");
// str = str.toLowerCase();
// output = ""
//
// for (var i = 0; i < str.length; i++) {
//     for (var j = 0; j < ref.length; j++) {
//         if(str[i] == ref[j] && str[i]){
//             output += (j + 1) + " ";
//         }
//     }
//
// }
//
// console.log(output.length)
// console.log(output)
// final = output.substring(0, output.length - 1);
// console.log(final.length)
// console.log(final)
// return final
//
// }
//
// alphabetString("The sunset sets at twelve o' clock.")

var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;


    while(true){
        guess = Math.floor((array[min] + array[max])/2);
        if(array[guess] === targetValue){
            console.log("found");
            console.log(guess);
            console.log(array[guess]);
            break
        }else if(array[guess] < targetValue){
            array[min] = guess + 1;
        }else{
            array[max] = guess - 1;
        }


    }

	return -1;
};

doSearch([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
, 73)
