/*Array: Rotate
Implement rotateArr(arr, shiftBy) that accepts array and offset.
Shift arr’s values to the right by that amount.
‘Wrap-around’ any values that shift off array’s end to the other side,
so that no data is lost. Operate in-place: given ([1,2,3],1),
change the array to [3,1,2].
Second: allow negative shiftBy (shift L, not R).
Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
Fourth: minimize the touches of each element.*/

    function rotateArr(arr, shiftBy){
        var temp = [];
        var j = 0;
        var l = 0;
        if(shiftBy >= 0){
            for(var i = 0; i<shiftBy; i++){
                //console.log(arr);
                temp = arr[arr.length-1];
                for(j = arr.length; j > 0; j--){
                    //console.log(arr);
                    arr[j] = arr[j-1];
                }
                arr[0] = temp;
                arr.length = arr.length -1;
            }
        }
        else if(shiftBy < 0){
            for(var k = 0; k > shiftBy; k--){
                //console.log(arr);
                temp = arr[0];
                for(l = 0; l < arr.length-1; l++){
                    //console.log(arr);
                    arr[l] = arr[l+1];
                }
                arr[arr.length-1] = temp;

            }
        }
    console.log(arr);
    }

    var randArr = [1,-2,3,4,5,6,-7];
    rotateArr(randArr, -2);
