function p1to255(){
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
}
function p1to255odd(){
    for (var i = 1; i < 256; i += 2) {
        console.log(i);
    }
}
function p_int_sum_0to255(){
    var sum = 0;
    for (var i = 0; i < 256; i++) {
        sum += i;
        console.log("i = "+i+", sum = "+sum );
    }
}
function p_arr(arr){
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function arr_max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i];
        }
    }
    console.log(max);
}
function arr_avg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum/arr.length;
    console.log(avg);
}
function odd_arr_0to255() {
    var arr = [];
    for (var i = 1; i < 256; i += 2) {
        arr.push(i);
    }
    return arr;
}
function sqr_arr_inplace(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]**2;
    }
    return arr;
}
function fnd_y_cnt(arr,y) {
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            cnt += 1;
        }
    }
    console.log(cnt);
}
function set_neg_to_zero(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i]=0;
        }
    }
    return arr;
}
function arr_max_min_mean(arr) {
    var sum = arr[0];
    var max = arr[0];
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    var mean = sum/arr.length;
    console.log("min = "+min);
    console.log("max = "+max);
    console.log("mean = "+mean);
}
function arr_shft_left(arr) {
    arr.splice(0,1);
    arr.push(0);
    return arr;
}
function neg_to_dojo(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'dojo';
        }
    }
    return arr;
}
