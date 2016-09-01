function randarray(arr,arr_length,negative_numbers,m_magnitude){
  for(var i = 0; i<arr_length; i++){
    rand = Math.random();
    if(negative_numbers == true){
      rand = (rand-0.5)*2;
    }
    arr.push(Math.round(m_magnitude*rand))
  }
}
// Here are your challenges:
// Book Index
// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of baroque fugues. He knows that some of those fugueing challenges will be less popular than others, so he needs a book index. Given a sorted array of pages, produce a book index string. Consecutive pages should form ranges separated by a dash. For [1,3,4,5,7,8,10], return the string "1, 3-5, 7-8, 10".
function book_index(arr){
  var sorted = arr.sort(function(a,b){return a - b})
  var book_index = ""
  console.log(sorted)
  var count = 1
  var tmp_digit = sorted[0]
  while(count < sorted.length){
    if(sorted[count] == tmp_digit + 1){
      book_index += tmp_digit
      // console.log("found increment ", sorted[count], " on ", tmp_digit)
      tmp_digit = sorted[count]
      count++
      while(sorted[count] == tmp_digit + 1){
        tmp_digit = sorted[count]
        count++
      }
      // tmp_digit = sorted[count]
      book_index += "-" + tmp_digit + ", "
      tmp_digit = sorted[count]
      count++
      // console.log(book_index)
    }
    else if(sorted[count] == tmp_digit){
      // console.log("found sorted[", count, "] to be the same as tmp_digit", tmp_digit)
      count++
      // console.log(book_index)
    }
    else{
      // console.log("adding new page ", tmp_digit)
      book_index += tmp_digit + ", "
      tmp_digit = sorted[count]
      count++
      // console.log(book_index)
    }
  }
  if(sorted[count] != tmp_digit){
    book_index += tmp_digit + ", "
  }
  return book_index.slice(0,-2) //this will get rid of the extra ", " at the end
}
// var arr2 = []
// randarray(arr2,10,false,20);
// console.log(arr2)
// console.log(book_index(arr2))

// Common Suffix
// Lance is writing his opus: a tome of beat poetry. Always looking for a good rhyme, he seeks words ending with the same letters. Write a function that, given a word array, returns the largest common suffix (word-end). For inputs ["deforestation", "citation", "conviction", "incarceration"], return "tion" (not a very creative starting point). If it is ["nice", "ice", "baby"], return "".
function common_suffix(arr){
  if(arr.length <= 1){
    return("nothing to compare!")
  }
  var response = ""
  var key = ""
  var smallest_str = arr[0].length
  for(var i = 1; i < arr.length; i++){
    if(arr[i].length < smallest_str){
      smallest_str = arr[i].length
    }
  }

  for(var i = 0; i< smallest_str; i++){
    for(var j = 0; j < arr.length - 1; j++){
      if (arr[j][arr[j].length-1-i] != arr[j+1][arr[j+1].length-1-i]){
        return response
      }
    }
    response = arr[j][arr[j].length-1-i] + response
  }
  return response
}
var arr = ["deforestation", "citation", "conviction", "incarceration"]
var arr2 = ["nice", "ice", "baby"]
var arr3 = ["nice", "ice", "rice"]
console.log(arr)
console.log(common_suffix(arr))
console.log(arr2)
console.log(common_suffix(arr2))
console.log(arr3)
console.log(common_suffix(arr3))
