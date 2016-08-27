/*Is Palindrome
Strings like "Able was I, ere I saw Elba" or
"Madam, I'm Adam" could be considered palindromes,
because (if we ignore spaces, punctuation and capitalization)
the letters are the same from back to front.
Create a function that returns a boolean indicating
whether the string is a strict palindrome.
For "a x a" or "racecar", return true. Do not ignore spaces,
punctuation and capitalization: if given "Dud" or "oho!", return false.

Next, ignore white space (spaces, tabs, returns), capitalization and punctuation.
*/

    function reverseMessage(arr){
        var reverse = '';
        for(var i = arr.length-1; i >= 0; i--)
            reverse += arr[i];
            //console.log(reverse);
            return reverse;
    }

    function isPalindrome(message){
        var revMessage = reverseMessage(message);
        if(message === revMessage){
            console.log("The string is a palindrome!");
            return true;
        }
        else if(message !== revMessage){
            console.log("The string is NOT a palindrome.");
            return false;
        }
    }


    isPalindrome("Able was I ere I saw elbA");
    isPalindrome("Able was I, ere I saw elbA");
