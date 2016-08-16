//Get 1 to 255
      for (var idx = 1; idx <= 255; idx++)
          {
              console.log(idx);
          }

//Get even 1000
      var sum =0;

      for(var idx=1; idx<1001; idx++)
          {
              if(idx%2 ===0)
                  {
                          sum+=idx
                  }
        }
      console.log(sum);

//Sum odd 5000

      var sum = 0;

      for (var idx=0; idx<=5000; idx++)
          {
                if(idx % 2 == 1)
                    {
                            sum = sum +idx;
                    }
          }
    console.log(sum);

//Iterate an Array -- incl. example
    var arr=[10,10,10]
    var sum = 0;

    for (var idx = 0; idx <arr.length; idx++)
        {
            sum = sum + arr[idx];
        }
    console.log(sum);

//Find Max -- incl. example
    var arr = [10,0,9,0]
    var max = arr[0];

    for (var idx=0; idx<=arr.length; idx++)
        {
            if (max < arr[idx])
            max = arr[idx]
        }
    console.log(max);

//Find Average -- incl. example
    var arr = [1,3,5,7,20]
    var sum = 0;

    for (var idx = 0; idx <arr.length; idx++)
        {
            sum = sum + arr[idx]
        }
    console.log(sum/arr.length);

//Array odd - Only odd numbers b/w 1-49
    var arr = [];

    for (var idx=1; idx<50; idx++)
    {
        if (idx % 2 ==1)
        arr.push(idx);
    }
    console.log(arr);

//Greater than Y -- incl. example

    var arr = greaterY([2,3,4,1,5,9,9,9], 5);

    function greaterY(array, Y)
    {
      var count = 0;
      for(i=0; i<array.length; i++){
        if(array[i]>Y)
        {
          count++;
        }
      }
      console.log(count);
      return array;
    }

//Squares -- incl. example

var array = squares([1,5,10,2]);

function squares(arr)
{
for (var idx=0; idx<arr.length; idx++)
    {
        arr[idx] = arr[idx] * arr[idx];
    }
console.log(arr);
}

//Negatives -- incl. example

negatives([1,5,10,-2]);

function negatives(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if (arr[i] < 0)
        {
            arr[i] = 0;
        }
    }
    console.log(arr);
}

//Max/Min/Average

maxMinAvg([7,2,5,4,200]);

function maxMinAvg(arr)
{
  var min = arr[0];
  var max = arr[0];
  var sum = 0;
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]< min)
    {
      min = arr[i];
    }
    if(arr[i]> max)
    {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  console.log("Min: " + min + ", Max: " + max + ", Average" + sum/arr.length);
}

//Swap Values -- incl example
{
  var arr = [1,5,10,-2]
  var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0];
    arr[arr.length - 1] = temp;
    console.log(arr);
}

//Number to String -- incl. example

var array = [-1,-1,-1]
for (var i=0; i<arr.length; i++){
       if (arr[i]<0) {
           arr[i]="Dojo";
       }
   }
   console.log(arr);
