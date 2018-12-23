function Node(value){
	this.value = value;
	this.next = null;
}

function LinkedList(value){
	if(value===undefined){
		return new Error("Value is must");
	}
	this.head = new Node(value);
	this.tail = this.head;
}

LinkedList.prototype.insertAfter = function(node,value){
	var newNode = new Node(value);
	node.next = newNode;
	this.tail = newNode;
	return newNode;
}

LinkedList.prototype.removeAfter = function(node,value){
	var afterNode = node.next;
	var newNode = new Node(value);
	node.next = newNode;
	newNode.next = afterNode;
	return newNode;
}

LinkedList.prototype.insertHead = function(value){
	var newNode = new Node(value);
	var nextNode = this.head;
	this.head = newNode;
	this.head.next = nextNode;
	return;
}

LinkedList.prototype.removeHead = function(){
	if(this.head.next===null){
		return new Error("You can't do this operation because there is one node");
	}
	var nextNode = this.head.next;
	this.head = undefined;
	this.head = nextNode;
}

LinkedList.prototype.find = function(value){
	var nextNode = this.head;
	while(nextNode){
		if(nextNode.value === value){
			return nextNode;
		}
		nextNode = nextNode.next;
	}
	console.log(nextNode);
	return nextNode;
}

LinkedList.prototype.forEach = function(cb){

	var nextNode = this.head;
	while(nextNode){
		console.log(nextNode);
		nextNode = nextNode.next;
	}

}

LinkedList.prototype.print = function(){
	var arr = [];
	var nextNode = this.head;
	while(nextNode){
		arr.push(nextNode.value)
		nextNode = nextNode.next;
	}
	return arr.join(",");
};

LinkedList.prototype.appendToTail = function(value) {
	var newNode = new Node(value);
	this.tail.next = newNode;
	this.tail = newNode;
};
