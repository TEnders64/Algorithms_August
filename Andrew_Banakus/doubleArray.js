function doubleArray(arr){
    var len = arr.length;
    for(var i = 0; i < len; i++){
        arr[i + (len)] = arr[i];
    }
    console.log(arr);
}

var randArr = [1, -2, 22, 05, 2, 3, 4, 5];
doubleArray(randArr);
