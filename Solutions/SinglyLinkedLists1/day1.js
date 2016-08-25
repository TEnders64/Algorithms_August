//
function NodeMaker (value) {
  // Take in a value and return an object containing (1) that value and (2) a next property that can point to other nodes that we create.
  return {
    value: value,
    next: null
  }
}

var myObj = NodeMaker(16);

var myList = {
	head: null,
}

myList.head = myObj;

myList.head.next = NodeMaker(23);

console.log(myList);
// Add Front
// Rudy isn’t as nice as other kids. Generally he just cuts in line, in front of everyone else. Given a pointer to the first listNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.
function addFront(head, value) {
	var temp = head;
	head = NodeMaker(value);
	head.next = temp;
	return head;
}
console.log(addFront(myList.head, 8))
//
// Remove Front
// Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty, return null.

function removeFront(head) {
	head = head.next;
	return head;
}
console.log(removeFront(myList.head))
//
// Contains
// Sam has lost track of his friend again. He thinks his bud Tad is somewhere in the very long line waiting to attend the latest Superman movie. Given a pointer to a listNode and a val, return whether val is found in any node within the list.
function contains(headNode, val) {
	var curr = headNode;
	if (headNode.value === val) { return true; }
	while (curr) {
		if (curr.value === val) { return true; }
		curr = curr.next;
	}
	return false;
}
console.log(contains(myList.head, 23))
