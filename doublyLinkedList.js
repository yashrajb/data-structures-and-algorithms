function doublyNode(value){
	this.prev = null;
	this.value = value;
	this.next = null;
}
function doublyLinkedList(value){
	if(value===undefined){
		return new Error("Value is must");
	}
	this.head = new doublyNode(value);
	this.tail = this.head;
}
doublyLinkedList.prototype.insertAfter = function(node,value){
	var newNode = new doublyNode(value);
	var nextVal = null;
	if(node.next){	
		nextVal = node.next;
	}
	newNode.next = nextVal;
	newNode.prev = node;
	
}