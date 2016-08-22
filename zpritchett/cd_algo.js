/**
 * cd_algo.js
 * Collection of algorithms assigned during CD bootcamp
 *
 * If you have mocha installed, check out test.js
 *
 */


var cdAlgorithms = function () {
    var algos = {
        pushFront           : pushFront,
        popFront            : popFront,
        insertAt            : insertAt,
        removeAt            : removeAt,
        swapArrayPairs      : swapArrayPairs,
        removeDuplicates    : removeDuplicates,
        reverseArray        : reverseArray,
        removeNegatives     : removeNegatives,
        rotateArray         : rotateArray,
        rotateArrayZ        : rotateArrayZ,
        filterArray         : filterArray,
        nthToLast           : nthToLast,
        shuffleArray        : shuffleArray,
        spliceArray         : spliceArray,
        intermediateSums    : intermediateSums,
        duplicateArray      : duplicateArray,
        zipArray            : zipArray,
        removeBlanks        : removeBlanks,
        getDigits           : getDigits,
        parensValid         : parensValid,
        isPalindrome        : isPalindrome,
        isAlphabetical      : isAlphabetical,
        determineCoins      : determineCoins,
        mmaObject           : mmaObject,
        arrToMap            : arrToMap,
        invertHash          : invertHash,
        concatString        : concatString,
        sliceString         : sliceString,
        trimString          : trimString,
        splitString         : splitString,
        searchString        : searchString
    };

    return algos;

    /**
     * Given an array and value, make the value magically appear at the fronts.
     */
    function pushFront (arr, val) {
        var origLength = arr.length;

        // scoot everything over
        for (var i = origLength - 1; i >= 0; i--) {
            arr[i + 1] = arr[i];
        }

        // add new value to front
        arr[0] = val;

        return arr.length;
    }

    /**
     * Given an array, tell the fist value that you need it and that it can no longer play
     * with its friends.
     */
    function popFront(arr) {
        var frontVal = arr[0];

        // scoot everything over
        for (var i = 1; i < arr.length; i++) {
            arr[i - 1] = arr[i];
        }

        arr.length--;

        return frontVal;
    }

    /**
     * Given array, index, and one additional value, insert the value into array at given index.
     * You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).
     */
    function insertAt(arr, index, val) {
        // scoot everything to right of index over in order to make room
        for (var i = arr.length; i > index; i--) {
            arr[i] = arr[i - 1];
        }

        arr[index] = val;
    }

    /**
     * Given array and an index in the array, remove and return the array value for that index.
     * Do this without using built-in array methods except pop(). Think of PopFront(arr) as equivalent to RemoveAt(arr,0).
     */
    function removeAt(arr, index) {
        var val = arr[index];

        for (var i = index; i < arr.length; i++) {
            arr[i] = arr[i + 1];
        }

        arr.length--;
        return val;
    }

    /**
     * Swap positions of successive pairs of values of given array. If length is odd, do not change final element.
     * For [1,2,3,4], return [2,1,4,3]. For [false,true,42], return [true,false,42].
     */
    function swapArrayPairs(arr) {
        for (var i = 0; i < arr.length; i += 2 ) {
            if (arr[i + 1]) {
                var tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    }

    /**
     * Given a sorted array, remove duplicate values.
     * Because array elements are already in order, all duplicate values will be grouped together.
     */
    function removeDuplicates(arr) {
        for (var i = 0; i < arr.length; i++) {
            // start looking at next index, continue until no more duplicates
            while (arr[i] === arr[i + 1]) {
                removeAt(arr, i + 1);
            }
        }
    }

    /**
     * Given a numerical array, reverse the order of the values.
     */
    function reverseArray(arr) {
        for(var i = 0; i < arr.length / 2; i++) {
            var j = arr.length - 1 - i;
            if (i !== j) {
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    /**
     * Accepts an array and removes any negative values from that array
     */
    function removeNegatives(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] < 0 && removeAt(arr, i);
        }
    }

    /**
     * Implement rotateArr(arr, offset) that accepts array and offset. Shift arr’s values by that amount. +offset -> right, -offset -> left
     */
    function rotateArray(arr, offset) {
        if (offset < 0) {   // rotate left
            for (var i = 0; i < Math.abs(offset); i++) {
                arr[arr.length] = arr[0];
                arr.shift();
            }
        } else {            // rotate right
            var length = arr.length;
            for (var i = arr.length - 1; i >= length - offset; i--) {
                arr.unshift(arr[arr.length - 1]);
                arr.length--;
            }
        }
    }

    /**
     * Implement rotateArr(arr, offset) that accepts array and offset. Shift arr’s values by that amount. +offset -> right, -offset -> left
     */
    function rotateArrayZ(arr, offset) {
        if (offset < 0) {   // rotate left
            for (var i = 0; i < Math.abs(offset); i++) {
                arr[arr.length] = arr[0];
                popFront(arr);
            }
        } else {            // rotate right
            var length = arr.length;
            for (var i = arr.length - 1; i >= length - offset; i--) {
                pushFront(arr, arr[arr.length - 1]);
                arr.length--;
            }
        }
    }

    /**
     * Given array and values min and max, remove array values between min and max.
     */
    function filterArray(arr, min, max) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > min && arr[i] < max) {
                removeAt(arr, i);
                i--;
            }
        }
    }

    /**
     * Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4.
     * If the array is too short, return null.
     */
    function nthToLast(arr, n) {
        if (arr.length - n > 0) {
            return arr[arr.length - n];
        }
        return null;
    }

    /**
     * Recreate the shuffle(arr) function built into JavaScript, to efficiently shuffle a given array’s values.
     */
    function shuffleArray(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var randomIndex = Math.round(Math.random() * i);
            var tmp = arr[i];
            arr[i] = arr[randomIndex];
            arr[randomIndex] = tmp;
        }
    }

    /**
     * Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).
     */
    function spliceArray(arr, start, end) {
        for (var i = start; i <= end; i++) {
            removeAt(arr, start);
        }
    }

    /**
     * You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values.
     */
    function intermediateSums(arr) {
        var sum = 0;
        var count = 0;
        var length = arr.length;

        for (var i = 0; i < length; i++) {
            sum += arr[i];
            count++;
            if (count === 10) {
                insertAt(arr, i + 1, sum);
                i++;
                length++;
                sum = 0;
                count = 0;
            }
        }

        if (sum > 0) {
            arr[arr.length] = sum;
        }
    }

    /**
     * Create a function that changes a given array to list each existing element twice, retaining original order.
     */
    function duplicateArray(arr) {
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            insertAt(arr, i + 1, arr[i]);
            i++;
            length++;
        }
    }

    /**
     * Create a standalone function that accepts two arrays and combines their values sequentially into the first array,
     * at alternating indices starting with the first array.
     */
    function zipArray(arr1, arr2) {
        var length1 = arr1.length;
        var offset = 1;

        for(var i = 0; i < arr2.length; i++) {
            if (i < length1) {
                insertAt(arr1, i + offset, arr2[i]);
                offset++;
            } else {
                arr1.push(arr2[i]);
            }
        }
    }

    /**
     * Create a function that, given a string, returns a string without blanks.
     */
    function removeBlanks(string) {
        var newString = '';

        for (var i = 0; i < string.length; i++) {
            newString += string[i] !== ' ' ? string[i] : '';
        }

        return newString;
    }

    /**
     * Create a JavaScript function that, given a string, returns the integer made from the string’s digits.
     */
    function getDigits(string) {
        var digitString = '';

        for (var i = 0; i < string.length; i++) {
            digitString += /\d/.test(string[i]) ? string[i] : '';
        }

        return parseInt(digitString);
    }

    /**
     * Create a function that, given an input string str, returns a boolean whether parentheses in str are valid.
     */
    function parensValid(string) {
        var parenTracker = [];
        for (var i = 0; i < string.length; i++) {
            if (string[i] === '(') {
                parenTracker.push('(');
            }else if(string[i] == ')') {
                if(!parenTracker.pop()){
                    return false;
                }
            }
        }

        return parenTracker.length === 0;
    }

    /**
     * Create a function that returns a boolean indicating whether the string is a strict palindrome.
     */
    function isPalindrome(string) {
        // get letters only
        var lettersOnly = '';
        for (var i = 0; i < string.length; i++) {
            lettersOnly += /[A-Za-z]/.test(string[i]) ? string[i].toLowerCase() : '';
        }

        var halfLength = Math.floor(lettersOnly.length / 2);
        var firstHalf = '';
        var secondHalf = '';
        for (var i = 0; i < halfLength; i++) {
            firstHalf += lettersOnly[i];
            secondHalf += lettersOnly[lettersOnly.length - 1 - i];
        }

        return firstHalf === secondHalf;
    }

    /**
     * Given a string, return a boolean indicating whether all letters contained in that string are in alphabetical order.
     */
    function isAlphabetical(string) {
        for (var i = 0; i < string.length; i++) {
            if(string[i] > string[i + 1]) {
                return false;
            }
        }
        return true;
    }

    /**
     * Given a number of U.S. cents, return the optimal configuration of coins, in an object.
     */
    function determineCoins(cents) {
        var qCount = Math.floor(cents / 25);
        var dCount = Math.floor((cents - qCount * 25) / 10);
        var nCount = Math.floor((cents - qCount * 25 - dCount * 10) / 5);
        var pCount = cents - qCount * 25 - dCount * 10 - nCount * 5;

        return {
            quarters: qCount,
            dimes: dCount,
            nickels: nCount,
            pennies: pCount
        }
    }

    /**
     * Given an array, return an object containing the array’s max, min and average values.
     */
    function mmaObject(arr) {
        var stats = {min: arr[0], max: arr[0], avg: arr[0]};
        var sum = 0;

        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
            arr[i] < stats.min && (stats.min = arr[i]);
            arr[i] > stats.max && (stats.max = arr[i]);
        }

        stats.avg = sum / arr.length;
        return stats;
    }

    /**
     * Given two arrays, create an associative array (map) containing keys of the first, and values of the second.
     */
    function arrToMap(arr1, arr2) {
        var map = {};

        if(arr1.length !== arr2.length) {
            return -1;
        } else {
            for (var i = 0; i < arr1.length; i++) {
                map[arr1[i]] = arr2[i];
            }
        }

        return map;
    }

    /**
     * Build invertHash(assocArr) to convert hash keys to values, and values to keys.
     */
    function invertHash(hash) {
        for (prop in hash) {
            var val = hash[prop];
            hash[val] = prop;
            delete hash[prop];
        }
    }

    /**
     * string1.concat(str2,str3,...,strX) - add string(s) to end of existing one. Return new string.
     */
    function concatString() {
        var newString = '';
        for (var i = 0; i < arguments.length; i++) {
            newString += arguments[i];
        }

        return newString;
    }

    /**
     * string.slice(start,end) - extract part of a string and return in a new one.
     */
    function sliceString(string, start, end) {
        var newString = '';
        var startIndex = start > 0 ? start : string.length + start;
        var endIndex = !end ?  string.length - 1 : ( end > 0 ? end - 1 : string.length + end);

        for (var i = startIndex; i <= endIndex; i++) {
            newString += string[i];
        }

        return newString;
    }

    /**
     * string.trim() - remove whitespace (spaces, tabs, newlines) from both sides, and return a new string
     */
    function trimString(string) {
        var newStr = '';
        var nsStart = 0;
        var nsEnd = 0;

        for (var i = 0; i < string.length; i++) {
            if (/\S/.test(string[i])) {
                nsStart = i;
                break;
            }
        }

        for (var i = string.length - 1; i >= 0; i--) {
            if (/\S/.test(string[i])) {
                nsEnd = i;
                break;
            }
        }

        for (var i = nsStart; i <= nsEnd; i++) {
            newStr += string[i];
        }

        return newStr;
    }

    /**
     * string.split(separator,limit) - split string into array of substrings, returning the new array.
     */
    function splitString(string, delim, limit) {
        var stringArr = [''];
        var hitCount = 0;
        var arrIndex = 0;

        for (var i = 0; i < string.length; i++) {
            if (string[i] == delim) {
                if (limit && hitCount++ >= limit - 1) {
                    break;
                }
                arrIndex++;
                stringArr[arrIndex] = '';
            } else {
                stringArr[arrIndex] += string[i];
            }
        }

        return stringArr;
    }

    /**
     * string.search(val) - search string for val (another string). Return index position of first match (-1 if not found).
     */
    function searchString(str, val) {
        for (var i = 0; i < str.length; i++) {
            // go through search string at current index
            // and check charaters sequentially for match
            var matched = true;
            for (var j = 0; j < val.length; j++) {
                matched &= val[j] === str[i + j];
                if (!matched) { break; }
            }

            if (matched) {
                return i;
            }
        }

        return -1;
    }
}

module.exports = new cdAlgorithms();
