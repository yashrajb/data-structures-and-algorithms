//pattern - left,root,right

const {BST} = require("./binary-search-tree");
BST.prototype.inOrder = function() {
	if(this.left){
		this.left.inOrder();
	}
	console.log(this.root);
	if(this.right){
		this.right.inOrder();	
	}
	return;
}
var obj = new BST(100);
var left = obj.insert(50);
var right = obj.insert(300);	              
left.insert(30);                             
left.insert(90);					       
right.insert(10);  
right.insert(400);
obj.inOrder(obj);