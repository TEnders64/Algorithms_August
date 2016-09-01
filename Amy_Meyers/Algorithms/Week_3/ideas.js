function NodeMaker (value) {
  // Take in a value and return an object containing (1) that value and (2) a next property that can point to other nodes that we create.
  return {
    value: value,
    next: null
  }
}
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
function initNodes(myList,value){
  var count = 0
  var current_node = myList.head
  var tmp = NodeMaker(value[0])
  current_node = tmp
  console.log(current_node)
  while(count < value.length){
    count++
    current_node.next = NodeMaker(value[i])
    current_node = current_node.next
    myList.head = current_node
  }
}
function addNodes(myList,data){
  var count = 0
  var curr = myList.head
  if(curr == null){
    var node = NodeMaker(data[0])
    curr = node
  }
  else if(curr != null){
    while(curr){
      curr=curr.next
    }
  }
  else if(curr == undefined){
    return "list has no object 'head'"
  }
}
var data_arr = []
randarray(data_arr,5,false,200)
myList = {head: null}
initNodes(myList.head,data_arr)
console.log(myList)
