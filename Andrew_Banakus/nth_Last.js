/* Nth-to-last
Return the element that is N-from-array’s-end.
Given ([5,2,3,6,4,9,7],3), return 4.
If the array is too short, return null. */


    function nth_Last(arr, value){
        var result = [];
        for(var i = arr.length; i >= arr.length-value; i--){
            if(i < 0)
                result = null;
            else
                result = arr[i];
        }
        console.log(result);
    }


var randArr = [5,2,3,6,4,9,7];
nth_Last(randArr, 8);
