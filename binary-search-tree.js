function BST(value){
	this.root = value;
	this.left = null;
	this.right = null;
}
BST.prototype.insert = function(value){
	var newTree = new BST(value);
	if(value < this.root){
		if(this.left){
			this.left.insert(value);
		}else{
			this.left = newTree;
		}
	}
	if(value > this.root) {
			if(this.right){
				this.right.insert(value);
			}else{
				this.right = newTree;
			}
	}
	return newTree;
}

BST.prototype.contain = function(value){
    if(this.root===value){
        return true;
    }
    var right = this.right===null?false:this.right.contain(value);
    var left = this.left===null?false:this.left.contain(value);
    return right || left;
}

module.exports ={
	BST
}