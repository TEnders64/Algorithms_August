function min_max_avg(arr) {

    var min = 0;
    var max = 0;
    var avg = 0;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }

    min = max;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    avg = sum / arr.length;
    var newArr = [min, max, avg];
    console.log(newArr);
}

min_max_avg([2, 5, 12, 5, 234, 54]);
