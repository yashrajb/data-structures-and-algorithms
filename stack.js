var Stack = function(capac) {
	this.capacity = (typeof capac==="number")? capac : Infinity;
	this.storage = {};
	this.count = 0;
	console.log(this.capacity);
}


Stack.prototype.push = function(value) {
	if(this.count < this.capacity){
		this.storage[this.count++] = value;
		console.log(this.storage);
	}else {
		console.log("stack overflow");
	}
}


Stack.prototype.pop = function(){
	if(this.count!==0){
		this.count =  this.count - 1;
		delete this.storage[this.count];
		console.log(this.storage);
	}else {
		console.log("Stack is underflow");
	}
}

Stack.prototype.size = function(){
	console.log(this.count);
}


var st = new Stack(2);
st.push("hello");
st.push("hi");
st.push("haahaha");
st.push("damn");
st.pop();
st.size();