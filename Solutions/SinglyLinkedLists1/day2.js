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
//
// Length
// Create a function that accepts a pointer to the first list node, and returns number of nodes in that sList.
//
//
console.log(myList)
function listLength(head) {
	var len = 0;
	var curr = head;
	while (curr) {
		len++;
		curr = curr.next;
	}
	return len;
}
console.log(listLength(myList.head))
// Max, Min, Average
// Create function sListMaxMinAvg(sList) to return the largest, smallest and average val of the nodes that comprise a singly-linked list.
function sListMaxMinAvg(list) {
	if (!list) { return null; }
	var curr = list.head;
	var largest = curr.value;
	var smallest = curr.value;
	var sum = 0;
	var length = listLength(list.head);
	while(curr) {
		if (curr.value > largest) {
			largest = curr.value
		}
		else if (curr.value < smallest) {
			smallest = curr.value
		}
		//regardless of whether those fired off, do the following:
		sum += curr.value;
		curr = curr.next;
	}
	// console.log(largest, smallest, sum, length)
	return [largest, smallest, sum / length]
}
console.log(sListMaxMinAvg(myList))
