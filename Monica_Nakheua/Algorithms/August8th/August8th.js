//august 8th - reverse arr, remove negs

Reverse array

Given a numerical array, reverse the order of the values. The reversed array should have the same length, with existing elements moved to other indices so that the order of elements is reversed. Don’t use a second array – move the values around within the array that you are given.

function reversearr(){

  var arr = [1,2,3,4]
  arr.reverse();
 {
   console.log(arr);
 }

}
reversearr ()

Remove negatives

Implement removeNegatives() that accepts an array and removes any negative values from that array.

function removeneg(){

  var arr = []
  var temp = 0;
  var count = 0;

  arr.unshift(-1,2,-3,4,-5)

  {
      for(var i = 0; i < arr.length; i++)
      {
          if (arr[i] < 0)
          {
              arr[i]=0;
              arr.splice(i,1);
          }
      }
          {
             console.log(arr);
          }
  }
}
removeneg()
