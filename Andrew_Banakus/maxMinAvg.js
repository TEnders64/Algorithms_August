/*Max/Min/Average with Object
Given an array, return an object containing
the array’s max, min and average values.*/
    function maxMinAvg(arr){
        var maths = {
            max : arr[0],
            min : arr[0],
            sum : 0,
            avg : 0
        };
        for(var i = 0; i < arr.length; i++){
            if(maths.max < arr[i]){
                maths.max = arr[i];
               // console.log(maths.max);
            }
            if(maths.min > arr[i]){
                maths.min = arr[i];
                //console.log(maths.min);
            }
            maths.sum += arr[i];
        }
        maths.avg = maths.sum / arr.length;
        return maths;
    }

    var array = [2, 3, 5, 1, 6, 9, 5];
    var Maths = maxMinAvg(array);

    console.log(Maths.max);
    console.log(Maths.min);
    console.log(Maths.avg);
