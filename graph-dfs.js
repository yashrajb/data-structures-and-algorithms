const {Graph} = require("./adj-list");

Graph.prototype.dfs = function(start,fn,visited){
fn(start);
var visited = visited || {};
visited[start] = true;
	this.g[start].forEach((neighbour) => {
		if(visited[this.g[neighbour]]){
			return;
		}
		return this.dfs(neighbour,fn,visited);
	});
}

var obj = new Graph();
obj.addNode(1);
obj.addNode(2);
obj.addNode(3);
obj.addNode(4);
obj.addEdge(1,2);
obj.addEdge(2,3);
obj.addEdge(3,4);
obj.addNode(5);
obj.addEdge(1,5);
obj.dfs(1,function(val){
	console.log(val);
});
console.log(obj.g);