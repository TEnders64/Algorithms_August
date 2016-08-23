august 5th weekend algorithms

Insert At

Given array, index, and one additional value, insert the value into array at given index. You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).

function insertAt(arr,index,val){

  var arr = [1,2,4,4];
  index = arr[2];
  var y = 3;

  for (var i = arr.length ; i > index; i--){
     arr[i] = arr[i - 1];
            }
              arr[2] = y;
              console.log(arr);
            }
  insertAt([1,2,4,4],2,3);

Remove At

Given array and an index in the array, remove and return the array value for that index. Do this without using built-in array methods except pop(). Think of PopFront(arr) as equivalent to RemoveAt(arr,0).

function RemoveAt (arr,idx){

      var arr = [1,2,3,4,5];
      var idx = 1;

      if (idx <=(arr.length-1));

          for (idx ; idx < arr.length - 1 ; idx++){
              temp = arr[idx];
              arr[idx] = arr [ idx + 1 ];
              arr[idx + 1] = temp;
           }
               {
                 arr.length--;
               }
                   {
                     arr.length++;
                     arr[arr.length-1] = temp;
                     arr.sort(function(a,b){
                       return a-b
                     });
                   }
                      {
                        console.log(arr);
                      }
    }
    RemoveAt([1,2,3,4,5],1)



Swap Array Pairs

Swap positions of successive pairs of values of given array. If length is odd, do not change final element. For [1,2,3,4], return [2,1,4,3]. For [false,true,42], return [true,false,42].

    function swaparrays(){

      var arr = [1,2,3,4,5];
      var temp = 0;

      for (var i = 1; i < arr.length; i = i + 2){
          temp = arr[i-1];
          arr[i-1] = arr[i];
          arr[i] = temp;
      }
      console.log(arr);
    }
    swaparrays()

Array Remove Duplicates

Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.

function removeDups(names){

    var names = ["Michael","Michael","Sarah","Sarah","Tim","Tim"];

        var temp = 0;
        var count = 0;

                for (var idx = names.length - 1; idx > 0; idx--)
                    {
                    if(names[idx] === names[idx - 1]){
                       for (var x = idx; x < names.length - 1; x++){
                            temp = names[x];
                            names[x] = names[x + 1];
                            names[x + 1] = temp;
                                  }
                                  count++;
                                  }
                    }
                        names.length -= count;
                       if (names[names.length - 1] === names[names.length - 2]){
                        names.length--;
                       }
    console.log(names);
}
removeDups()
