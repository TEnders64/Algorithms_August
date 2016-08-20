//Get 1 to 255

    function oneTo255(){
      for (var idx = 1; idx <= 255; idx++)
          {
              console.log(idx);
          }
    }

    oneTo255();

//Get even 1000

    function geteven1000()
    {
      var sum = 0;

      for (var idx=1; idx <1001; idx++)
              {
                if (idx % 2 ===0)
                    {
                      sum+=idx
                    }
              }
          {
            console.log(sum);
          }
    }
    geteven1000();

//Sum odd 5000

    function sumOdd5000(){
      var sum = 0;

      for (var idx=0; idx<=5000; idx++)
        {
              if(idx % 2 == 1)
                  {
                          sum = sum +idx;
                  }
        }
      console.log(sum);
    }
    sumOdd5000()

//Iterate an Array -- incl. example

    function IterateAnArray()
    {
      var arr=[10,10,10]
      var sum = 0;

      for (var idx = 0; idx <arr.length; idx++)
          {
              sum = sum + arr[idx];
          }
      console.log(sum);
    }

    IterateAnArray()

//Find Max -- incl. example

    function findMax()
      {
          var arr = [10,0,9,0]
          var max = arr[0];

          for (var idx=0; idx<=arr.length; idx++)
              {
                  if (max < arr[idx])
                  max = arr[idx]
              }
                    {
                        console.log(max);
                    }
      }
      findMax();

//Find Average -- incl. example

    function findAvg()
    {
        var arr = [1,3,5,7,20]
        var sum = 0;

        for (var idx = 0; idx <arr.length; idx++)
                {
                    sum = sum + arr[idx]
                }
                      {
                        console.log(sum/arr.length);
                      }
    }
    findAvg();

//Array odd - Only odd numbers b/w 1-49

    function oddNumbers()
    {
      var arr = [];
      for (var idx=1; idx<50; idx++)
              {
                if (idx % 2 ==1)
                arr.push(idx);
              }
                  {
                    console.log(arr);
                  }
    }
    oddNumbers()

//Greater than Y -- incl. example

    function GreaterY()
    {
      var arr = greaterY([2,3,4,1,5,9,9,9], 5);

      function greaterY(array, Y)
      {
        var count = 0;
        for(i=0; i<array.length; i++)
        {
          if(array[i]>Y)
          {
            count++;
          }
        }
        console.log(count);
        return array;
      }
    }
    GreaterY()

//Squares -- incl. example

    function squares()
    {
      var array = squares([1,5,10,2]);

      function squares(arr)
      {
      for (var idx=0; idx<arr.length; idx++)
          {
              arr[idx] = arr[idx] * arr[idx];
          }
      console.log(arr);
      }
    }
    squares()

//Negatives -- incl. example

    function noNegVals ()
    {
      negatives([1,-2,10,-2]);

      function negatives(arr)
      {
          for(var i = 0; i < arr.length; i++)
          {
              if (arr[i] < 0)
              {
                  arr[i] = 0;
              }
          }
              {
                 console.log(arr);
              }
      }
    }
    noNegVals()

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

    function swapvalues(){

        var arr = [1,5,10,-2]
        var temp = arr[0];

        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = arr[0];
        arr[arr.length - 1] = temp;
        console.log(arr);

    }
    swapvalues()

//Number to String -- incl. example

    function numstring (){
      var arr = [-1,-1,-1]
      for (var i=0; i<arr.length; i++){
             if (arr[i]<0) {
                 arr[i]="Dojo";
             }
         }
         console.log(arr);
    }
    numstring()
