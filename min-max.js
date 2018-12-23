const {BST} = require("./binary-search-tree");
BST.prototype.deleteMin = function(parent){
	if(!this.left && !this.right){
		if(parent===undefined){
			this.root = null;
		}else {
			parent.left = null;
		}
	}
	if(!this.left && this.right){
		if(parent){
			parent.left.root = this.right.root;
			parent.left.right = this.right.right
		}else {
			this.root = this.right.root;
			this.right = this.right.right;
		}
	}
	if(this.left){
		this.left.deleteMin(this);
	}
}

BST.prototype.deletingSingleChild = function(value,parent){
	if(this.root === value){
		if(this.left && this.right){
			return -1;
		}
		if(!this.left && !this.right){
			if(parent){
				if(parent.root > this.root){
					parent.left = null;
				}
				if(parent.root < this.root){
					parent.right = null;
				}
			}else {
				if(!this.left && !this.right){
					this.root = null;
				}
				if(this.left){
					this.root = this.left.root;
					this.left = this.left.left;
				}
				if(this.right){
					this.root = this.right.root;
					this.left = this.right.right;	
				}
				if(this.left && this.right){
					this.root = this.right.root;
					this.right = this.right.right;
				}
			}
		}
		if(this.left || this.right){
			if(this.left){
				this.root = this.left.root;
				this.left = null;
			}
			if(this.right){
				this.root = this.right.root;
				this.right = null;
			}
		}
	}	
	if(value > this.root) {
		return this.right.deletingSingleChild(value,this);
	}
	if(value < this.root){
		return this.left.deletingSingleChild(value,this);
	}
	return -1;
}



//deleting 2 node solution
BST.prototype.deletingTwoNode = function(value,parent){
	if(this.root === value){
		if(this.left && this.right){
			var obj = this.right;
			var replacement;
			while(obj.left!==null){
				replacement = obj;
				obj = obj.left;
			}
			if(replacement!==null){
				this.root = obj.root;
				replacement.left = null;
			}
		}
		if(this.left && !this.right){
			this.root = this.left.root;
			this.left = this.left.left;
		}
		if(this.right && !this.left){
			var obj = this.right;
			var replacement;
			while(obj.left!==null){
				replacement = obj;
				obj = obj.left;
			}
			if(replacement!==null){
				this.root = obj.root;
				replacement.left = null;
			}
		}
		return ;
	}
	if(value > this.root) {
		return this.right.deletingTwoNode(value,this);
	}
	if(value < this.root){
		return this.left.deletingTwoNode(value,this);
	}
	return -1;
}
var obj = new BST(100);
obj.insert(50);                                       
obj.insert(20);                                           
obj.insert(70);                                            				     
obj.insert(60);                                           
obj.insert(120);                                
obj.insert(110);                          
obj.insert(150);                         
console.log(obj.deletingTwoNode(100));