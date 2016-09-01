// Recreate these built-in functions from JavaScript’s string library:

// String.concat
// string1.concat(str2,str3,...,strX) - add string(s) to end of existing one. Return new string.
function my_concat(arr1,arr2){
  for(var i = 0; i< arr2.length; i++){
    arr1.push(arr2[i])
  }
}
// var arr1 = [1,2,3,4]
// console.log("arr1 before: " + arr1)
// var arr2 = [5,6,7,8]
// console.log("arr2: " + arr2)
// my_concat(arr1,arr2)
// console.log("arr1 after: " + arr1)

// String.slice
// string.slice(start,end) - extract part of a string and return in a new one. Start and end are indices into the string, with the first character at index 0. End param is optional and, if present, refers to one beyond the last character to include.
function my_slice(arr,start,end = arr.length){
  var arr_resp = [];
  if(end > arr.length){
    end = arr.length;
  }

  if(start >= 0){
    for(var i = start; i< end; i++){
      arr_resp.push(arr[i])
    }
  }
  else{
    for(var i = end - 1; i >= end + start; i--){
      arr_resp.push(arr[i])
    }
  }
  return arr_resp
}
// Bonus: include support for negative indices, representing offsets from string-end. Example: string.slice(-1) returns the string’s last character.

// var arr = [0,1,2,3,4,5,6,7,8,9]
// console.log("array to slice: " + arr)
// console.log("Slicing from 0 to 2:")
// console.log(my_slice(arr,0,2))
// console.log("when my_slice(arr,-3) is ran: ")
// console.log(my_slice(arr,-3))

// String.trim
// string.trim() - remove whitespace (spaces, tabs, newlines) from both sides, and return a new string.
// Example: "\n hellogoodbye\t ".trim() should return "hellogoodbye".
function my_trim(str){
  var tab_char = "\t"
  var space_char = " "
  var newline_char = "\n"
  var new_str = ""
  var front_check = false

  var count = 0
  while(str[str.length - 1 - count] == tab_char || str[str.length - 1 - count] == space_char || str[str.length - 1 - count] == newline_char){
    str = str.slice(0, - 1)
  }

  for(var i = 0; i< str.length; i++){
    if(!(front_check)){
      if(str[i] != space_char && str[i] != tab_char && str[i] != newline_char){
        front_check = true
        new_str += str[i]
      }
    }
    else{
      new_str += str[i]
    }
  }
  return new_str
}

// var arr ="\n   Here are some things. \t"
// console.log("Old String: " + arr)
// console.log(my_trim(arr))

// String.split
// string.split(separator,limit) - split string into array of substrings, returning the new array. Separator specifies where to divide substrings and is not included in any substring. If "" is specified, split string on every character. Limit is optional and indicates number of splits; additional post-limit items should be discarded.
// Note: existing string is unaffected.
function my_split(str,separator,limit=NaN){
  var arr_response = [];
  var tmp_str = ""
  var count = 0;
  for(var i = 0; i < str.length; i++ ){
    if(arr_response.length >= limit){
      break
    }
    if(str[i] == separator){
      arr_response[count] = tmp_str
      count ++
      tmp_str = ""
    }
    else{
      tmp_str += str[i]
    }
  }
  if(tmp_str != "" && arr_response.length < limit){
    arr_response[count] = tmp_str
  }
  return arr_response
}
// var str = "Our understanding what gender, and what defines it, and how it's expressed, is constantly evolving. This can be disorienting for everyone, but is ultimately a great thing because, in theory, it will lead to more people having access to a wider range of language and widely recognized identities that work for who they actually are (as opposed to trying to bend their authentic selves to fit into a painfully narrow, outdated range of overly simplistic gender options). According to the World Health Organization, gender is “socially constructed roles, behaviors, activities, and attributes that a given society considers appropriate for men and women.” Gender is different from sex in that it has no intrinsic link to anatomy."
// console.log(str, "\n\n")
// console.log(my_split(str,"."))
// console.log("\n\n", my_split(str,"d", limit = 2))

// String.search
// string.search(val) - search string for val (another string). Return index position of first match (-1 if not found).
function search(str, val){
  var tmp_str = ""
  for(var i = 0; i < str.length-val.length ; i++){
    tmp_str = str.slice(i,i+val.length)
    if(tmp_str == val){
      return i
    }
  }
  return -1
}
// var str = "hello, how are you?"
// console.log(str)
// console.log(search(str,"how,"))
// Contact GitHub API Training Shop Blog About
