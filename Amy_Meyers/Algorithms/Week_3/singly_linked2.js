// Feel free to use the following constructor function for our list nodes if you're comfortable with this and new -- otherwise just use the function from Day 1.
function randarray(arr,arr_length,negative_numbers,m_magnitude){
  for(var i = 0; i<arr_length; i++){
    rand = Math.random();
    if(negative_numbers == true){
      rand = (rand-0.5)*2;
    }
    arr.push(Math.round(m_magnitude*rand))
  }
  return arr;
}
// this doesnt work :(
// function initNodes(myList,value){
//   var count = 0
//   var current_node = myList.head
//   var tmp = NodeMaker(value[0])
//   current_node = tmp
//   console.log(current_node)
//   while(count < value.length){
//     count++
//     current_node.next = NodeMaker(value[i])
//     current_node = current_node.next
//     myList.head = current_node
//   }
// }
// var data_arr = []
// randarray(data_arr,5,false,200)
// myList = {head: null}
// initNodes(myList,data_arr)
// console.log(myList)

function NodeMaker (value) {
  // Take in a value and return an object containing (1) that value and (2) a next property that can point to other nodes that we create.
  return {
    value: value,
    next: null
  }
}
var myObj = NodeMaker(205)
var anotherObj = NodeMaker(300)
myObj.next = anotherObj
var myList = { head: null }
myList.head = myObj


// var newNode = new listNode(/*SOME VALUE*/)
// // And just a reminder that our sList point can look like this:
// var sList = { head: newNode }
// Here are your challenges:
// Length
// Create a function that accepts a pointer to the first list node, and returns number of nodes in that sList.
function nodeCount(head){
  var curr = head
  var count = 0
  if(curr.value){
    count++
  }
  curr = curr.next
  while(curr){
    if(curr.value){
      count++
    }
    curr = curr.next
  }
  return count
}
// console.log(myList)
// console.log("number of nodes in myList:", nodeCount(myList.head))
// console.log("adding node,", otherotherObj, "to the end of the singlylist myList")
// anotherObj.next = otherotherObj
// console.log("New node length of myList:", nodeCount(myList.head))
// console.log("myList is currently:", myList)

// Max, Min, Average
// Create function sListMaxMinAvg(sList) to return the largest, smallest and average val of the nodes that comprise a singly-linked list.
function nodeStats(head){
  var curr = head
  if(curr.value){
    var stats = {"max": curr.value,"min":curr.value,"avg": 0}
    var sum = head.value
    var count = 1
    curr = curr.next
  }
  else{
    return "initial node has null value"
  }

  while(curr){
    if(curr.value > stats["max"]){
      stats["max"] = curr.value
    }
    if(curr.value < stats["min"]){
      stats["min"] = curr.value
    }
    sum += curr.value
    count++
    curr = curr.next
  }
  stats["avg"] = sum/count
  return stats
}
var rndNumber = []
console.log("original list is", myList, "with values", myList.head.value, "and", myList.head.next.value)
console.log("Adding new node with value", randarray(rndNumber,1,true,40)[0], ".")
otherotherObj = NodeMaker(rndNumber[0])
anotherObj.next = otherotherObj
console.log("Stats on nodes:")
console.log(nodeStats(myList.head))

// anotherObj.next = otherotherObj
// console.log(nodeStats(myList.head))
