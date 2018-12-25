var Stack = function(capac) {
	this.capacity = (typeof capac==="number")? capac : Infinity;
	this.storage = {};
	this.count = 0;
}


Stack.prototype.push = function(value) {
	if(this.count < this.capacity){
		this.storage[this.count++] = value;
		return this.storage;
	}else {
		return "stack overflow";
	}
}


Stack.prototype.pop = function(){
	if(this.count!==0){
		this.count =  this.count - 1;
		var temp = this.storage[this.count];
		delete this.storage[this.count];
		return temp;
	}else {
		return "Stack is underflow";
	}
}

Stack.prototype.peek = function(){
	return this.storage[this.count-1];
}

Stack.prototype.size = function(){
	return this.count;
}


module.exports = {
	Stack
}
var st = new Stack(2);
st.push("hello");
st.push("hi");
st.push("haahaha");
st.push("damn");