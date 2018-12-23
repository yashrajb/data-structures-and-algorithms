const {BST} = require("./binary-search-tree");
BST.prototype.postOrder = function(){
	if(this.left){
		this.left.postOrder();
	}
	if(this.right){
		this.right.postOrder();
	}
	console.log(this.root);
}
var obj = new BST(100);
var left = obj.insert(50);
var right = obj.insert(300);	              
left.insert(30);                             
left.insert(90);					       
right.insert(10);  
right.insert(400);
