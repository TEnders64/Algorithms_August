/* Remove negatives
Implement removeNegatives() that accepts an array
and removes any negative values from that array. */

    function removeNeg(arr){
        var count = 0;
        var j = 0;
        for(var i = arr.length-1;  i >= 0; i--){
             if(arr[i] < 0){
                 count++;
                 for(j = i; j < arr.length; j++)
                    arr[j] = arr[j+1];
                    //console.log(arr);
                }
                //console.log(arr);
            }
            arr.length = arr.length-count;
           // console.log(count);
            console.log(arr);
            return arr;
        }

    var arrRand = [-5, 2, 5, -12, -11, -1, 5];
    removeNeg(arrRand);
