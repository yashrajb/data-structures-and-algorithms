const {Graph} = require("./adj-list");
Graph.prototype.bfs = function(start,fn){
	var visited = {};
	var q = [start]; //[1]
	while(q.length){
		var shift = q.shift(); //[] "1"
		fn(shift);
		visited[shift] = 0; //{"1":0}
		var neighbour = this.g[shift].filter(function(val){
			if(!visited[val]){
				visited[val] = visited[shift] + 1;
				return true;
			}
		});
		q = q.concat(neighbour);
	}
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
obj.bfs("1",function(val){
	console.log(val);
});