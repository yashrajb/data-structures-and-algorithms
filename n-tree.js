function Tree(value){
	this.value = value;
	this.children = [];
}
Tree.prototype.addChildren = function(value){
	var newTree = new Tree(value);
	this.children.push(newTree);
	return newTree;
}


