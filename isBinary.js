const {BST} = require("./binary-search-tree");
BST.prototype.isBinaryTree = function(){
	if(this.left && this.right){
		if(FindRoot(this)){
			var left = this.left.isBinaryTree();
			var right = this.right.isBinaryTree();
		}
	}
	if(!this.left && !this.right){
		return true;
	}
	if((!this.left && this.right) || (this.left && !this.right)){
		return false;
	}
	return left && right;
}
function FindRoot(val){
	if(val.root > val.left.root && val.root < val.right.root){
			return true;
	}else{
		return false;
	}
}