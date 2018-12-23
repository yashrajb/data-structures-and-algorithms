//pattern - root,left,right

const {BST} = require("./binary-search-tree");
BST.prototype.preOrder = function(){
	console.log(this.root);
	if(this.left){
		this.left.preOrder();
	}
	if(this.right){
		this.right.preOrder();
	}
	return;
}
var obj = new BST(100);
var left = obj.insert(50);
var right = obj.insert(300);	              
left.insert(30);                     //  100       
left.insert(90);				  // 50      300        
right.insert(10);  				// 30  90  10  400
right.insert(400);                    
obj.preOrder();