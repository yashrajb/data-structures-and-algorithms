//matrix graph representation
function Graph(){
	this.matrix = [];
}
Graph.prototype.addNode = function(value){
		this.matrix[value] = [];
}
Graph.prototype.addEdge = function(v1,v2){
	this.matrix[v1][v2] = 1;
	this.matrix[v2][v1] = 1;		
}
Graph.prototype.isEdge = function(v1,v2){
	if(this.matrix[v1][v2] && this.matrix[v2][v1])
	{
		return true;
	}
	return false;
}
var obj = new Graph();
obj.addNode(0);
obj.addNode(1);
obj.addEdge(0,1);
console.log(obj.isEdge(0,1));
console.log(obj);