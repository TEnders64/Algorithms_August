/*Double Trouble
Create a function that changes a given array
to list each existing element twice, retaining original order.
Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].*/

    function doubleIndex(arr){
        var len = arr.length;
        for(var i = 0; i < len; i++){
            arr[i + (len)] = arr[i];
        }
        //console.log(arr);
        var j = 0;
        for(i = 0; i < len*2; i+=2){
            arr[i] = arr[j + len];
            arr[i+1] = arr[j + len];
            j++;
           // console.log(i);
           // console.log(arr);
        }
        console.log(arr);
    }
    
    var array = [4, "Ulysses", 42, false];
    doubleIndex(array);
