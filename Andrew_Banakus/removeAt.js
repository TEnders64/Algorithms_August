
      /*Remove At
      Given array and an index in the array,
      remove and return the array value for that index.
      Do this without using built-in array methods except pop().
      Think of PopFront(arr) as equivalent to RemoveAt(arr,0).*/

          function removeAt(arr, index){
              arr[arr.length] = arr[index];
              for(var i = index; i <arr.length-1; i++){
                  arr[i] = arr[i+1];
              }
              var value = arr[arr.length-1];
              arr.length = arr.length-2;
              console.log("New Arrray = " + arr);
              console.log("Returned value is = " + value);
          }

          removeAt([2, 25, 12, 15, 0, 12, 13, 55, 1], 3);
