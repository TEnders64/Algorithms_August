/* Insert At

/*Given array, index, and one additional value,
insert the value into array at given index.
You can think of PushFront(arr,val) as equivalent
to InsertAt(arr,0,val).*/

  function insertAt(arr, index, addVal){
    var value = addVal;
    for(var i = arr.length; i > arr[addVal]; i--){
      arr[i] = arr[i-1];
    }
    arr[index] = value;
    console.log(arr);
}
  var arrRand = [3, 5, 21, 5, 3, 6, 23];
  insertAt(arrRand, 5, 7);
