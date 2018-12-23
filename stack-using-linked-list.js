function Stack(capacity){
	if(capacity===undefined){
		this.capacity = 5;
	}else{
		this.capacity = capacity;
	}
	this.length = 0;
	this.storage = {};
}
Stack.prototype.push = function(value){
	if(this.length===0){
		this.storage = new Node(value);
		this.length++;
		return;
	}
	if(this.length < this.capacity){
		var newNode = new Node(value);
		newNode.next = this.storage;
		this.storage = newNode;
		this.length++;
		return;
	}else {
		return new Error("Stack overflow");
	}
}

Stack.prototype.pop = function(){
	if(this.length===0){
		return new Error("Stack undeflow");
	}
	if(this.length < this.capacity){
		var nextNode = this.storage.next;
		this.storage = nextNode;
		this.length--;
	}else {
		return new Error("Stack undeflow");
	}
}

Stack.prototype.print = function(){
	var nextNode = this.storage;
	while(nextNode){
		console.log(nextNode.value);
		nextNode = nextNode.next;
	}

}