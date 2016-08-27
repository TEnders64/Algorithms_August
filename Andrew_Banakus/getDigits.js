/*Get digits
Create a JavaScript function that, given a string,
returns the integer made from the string’s digits.
Given "0s1a3y5w7h9a2t4?6!8?0", the function should
return the number 1357924680.*/

    function getDigits(arr){
        var newArr = '';
        for(var i = 0; i < arr.length; i++){
            if (arr[i] === '0' ||
                arr[i] === '1' ||
                arr[i] === '2' ||
                arr[i] === '3' ||
                arr[i] === '4' ||
                arr[i] === '5' ||
                arr[i] === '6' ||
                arr[i] === '7' ||
                arr[i] === '8' ||
                arr[i] === '9'){
                    newArr += arr[i];
                    console.log(newArr);
            }
            else{
                continue;
            }
        }
        return newArr;
    }

    var randArr = '0s1a3y5w7h9a2t4?6!8?0';
    getDigits(randArr);
