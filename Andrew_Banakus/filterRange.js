/* Array: Filter Range
Alan is good at breaking secret codes.
One tool is to eliminate numbers he knows are
outside a certain specific range. Given array
and values min and max, remove array values
between min and max. Work in-place: return the
array you are given, with values in original order.
No built-in array functions. */

    function filterRange(arr, min, max){
        for(var i = arr.length-1;  i >= 0; i--)
            if(arr[i] < min || arr[i] > max){
                for(var j = i; j < arr.length; j++){
                    arr[j] = arr[j+1];
                }
                arr.length -= 1;
            }
            console.log(arr);
    }

    var array = [2, 6, 1, 3, 7, 10, 10, 10, 10, -5, -5, 5, 6, 8, 9];
    filterRange(array, 3, 6);
