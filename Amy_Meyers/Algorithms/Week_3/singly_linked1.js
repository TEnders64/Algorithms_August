// Consider a row of gymnasts, all facing left so that all they can see is the gymnast immediately ahead in line. Now imagine that each of the gymnasts raises a right arm to put a right hand on the shoulder of the next gymnast in line. This mental picture is akin to a linked list. Many languages and systems use linked lists heavily, and they are frequently used in interview questions. Why are they so popular?
// Linked lists provide a way to store a large amount of information without forcing the runtime to find a large contiguous chunk of memory (as arrays do). Indeed, a linked list of 1000 pieces of information could use 1000 small spaces in memory. Like an array, they keep information in a certain order. However, unlike arrays, you need not relocate everything in order to add a value to the middle! Linked lists introduce the reference concept – essentially, storing the location of the variable, instead of its value. This reference is ‘just another’ attribute in the node object that can be compared, set, etc.
// Since we haven't yet talked about JavaScript's constructor functions and the keywords this and new, consider the following function:
// function NodeMaker (value) {
//   // Take in a value and return an object containing (1) that value and (2) a next property that can point to other nodes that we create.
//   return {
//     value: value,
//     next: null
//   }
// }
// // // To make an object:
// var myObj = NodeMaker(16)
// // // To make another object:
// var anotherObj = NodeMaker(22)
// // // To make myObj point to anotherObj, creating a linked list:
// myObj.next = anotherObj
// // Now, say you're given a different object that looks like this:
// var myList = { head: null }
// We're going to use this object to keep track of the head node in our list, like so:
// myList.head = myObj
// Our singly-linked list now looks like this:
// myList // { head: myObj }
// myObj // { value: 16, next: anotherObj }
// anotherObj // { value: 22, next: null }
// Here are your challenges:
// Add Front
// Rudy isn’t as nice as other kids. Generally he just cuts in line, in front of everyone else. Given a pointer to the first listNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.
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

function addFront(head,value){
  var tmp_head = head
  head = NodeMaker(value)
  head.next = tmp_head
  return head
}
// console.log(myList)
// myList.head = addFront(myList.head,1)
// console.log(myList)
// console.log(myList.head.next.next)

// Remove Front
// Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty, return null.
function removeFront(head){
  head = head.next
  return head
}
console.log(myList)
console.log(removeFront(myList.head))
// Contains
// Sam has lost track of his friend again. He thinks his bud Tad is somewhere in the very long line waiting to attend the latest Superman movie. Given a pointer to a listNode and a val, return whether val is found in any node within the list.
function contains(head,value){
  var current_head = head
  while(current_head){
    if(current_head.value == value){
      return true
    }
    current_head = current_head.next
  }

  return false
}
val_list = [1,2,3,4,5,300,7,8,9,0,205]
console.log("Looking at myList:", myList)
for (var i = 0; i < val_list.length; i++) {
  console.log("Searching for value", val_list[i], "in myList:", contains(myList.head,val_list[i]))
}
