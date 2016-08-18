function randarray(arr,arr_length,negative_numbers,m_magnitude){
  for(var i = 0; i<arr_length; i++){
    rand = Math.random();
    if(negative_numbers == true){
      rand -= 0.5*2;
    }
    arr.push(Math.round(m_magnitude*rand))
  }
  return arr
}
// Push Front
// Given array and an additional value, *insert this value* at the beginning of the array.
function push_front(arr,y){
  console.log(arr);
  arr.unshift(y);
  console.log(arr);
}

// ###Pop Front
// Given array, *remove and return* the value at the beginning of the array. Do this without using any built-in array methods except `pop()`.
function pop_front(arr){
  console.log(arr);
  var y = arr[0];
  for(var i = 1; i<arr.length;i++){
    arr[i-1] = arr[i];
  }
  arr.pop();
  return y;
}
// var arr = [];
// randarray(arr,10,true,100);
// console.log(pop_front(arr));
// console.log(arr)


// ###Insert At
// Given array, index, and additional value, insert the value into array at given index. You can think of `PushFront(arr,val)` as equivalent to `InsertAt(arr,0,val)`.
function InsertAt(arr,pos,val){
  for(var i = pos; i < arr.length; i++){
    console.log(arr)
    var tmp = arr[i];
    arr[i] = val;
    val=tmp;
  }
  arr[arr.length]=val;
  return arr
}
// var arr = [];
// randarray(arr,10,false,100);
// console.log(arr)
// console.log(InsertAt(arr,1,-1))

// ###Remove At
// Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except `pop()`. Think of `PopFront(arr)` as equivalent to `RemoveAt(arr,0)`.
function RemoveAt(arr,pos){
  for(var i = pos+1; i<arr.length; i++){
    arr[i-1]=arr[i]
  }
  arr.pop();
  return arr
}
// var arr = [];
// randarray(arr,10,false,100);
// console.log(arr)
// console.log(RemoveAt(arr,arr.length))

// ###Swap Array Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change final element. For `[1,2,3,4]`, return `[2,1,4,3]`. For `[false,true,42]`, return `[true,false,42]`.
function SwapArrayPairs(arr){
  var tmp = 0; //initialized variable
  for(var i = 1; i<arr.length; i+=2 ){
    tmp = arr[i-1];
    arr[i-1] = arr[i];
    arr[i] = tmp;
  }
  return arr
}
// var arr = [];
// randarray(arr,9,true,100);
// console.log(arr)
// console.log(SwapArrayPairs(arr))

// ###Array Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.
function RemoveDuplicates(arr){
  var new_arr = [];
  var count = 0;
  var key = 0;

  while(count < arr.length){
    key = arr[count];
    new_arr.push(key);
    for(var i = count; i<arr.length; i++){
      if(arr[i] == arr[i+1]){
        count += 1;
      }
      else{
        count +=1;
        break;
      }
    }
    // key = arr[count];
    // new_arr.push(key);
    // if(arr[count+1] == key){
    //   count += 2;
    // }
    // else{
    //   new_arr.push(arr[count+1]);
    //   count += 2;
    // }
  }
  return new_arr;
}
var arr = [];
randarray(arr,10,false,8);
console.log(arr.sort())
console.log(RemoveDuplicates(arr.sort()))
