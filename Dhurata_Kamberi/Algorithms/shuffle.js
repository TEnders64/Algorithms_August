// Shuffle
//
// Recreate the shuffle(arr) function built into JavaScript, to efficiently
// shuffle a given array’s values. Work in-place, of course. Do you need to return anything from your function?
function shuffle(array) {
  var i = 0
  var j = 0
  var temp = null
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
var arr = [1,2,3,4]
console.log(arr);
shuffle(arr)
console.log(arr);
