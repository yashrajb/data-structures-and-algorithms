function Graph(){
	this.g = {};
}
Graph.prototype.addNode = function(node){
		if(!this.g.hasOwnProperty(node)){
			this.g[node] = [];
		}else{
			return "node already exists";
		}
}
Graph.prototype.addEdge = function(v1,v2){
		if(this.g.hasOwnProperty(v2) && this.g.hasOwnProperty(v1)){
			this.g[v1].push(v2);
		}else{
			return "node not exist";
		}
}
Graph.prototype.contain = function(value){
	if(this.g.hasOwnProperty(value)){
		return true;
	}
	return false;
}
Graph.prototype.isEdge = function(v1,v2){
	for(var i=0;i<this.g[v1].length;i++){
		if(this.g[v1][i]===v2){
			return true;
		}
	}
	return false;
}

module.exports = {
	Graph
}