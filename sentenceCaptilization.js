function captiliaze(stringA){
	var arr = stringA.split(" ");
	for(var i=0;i<arr.length;i++){
		var n = arr[i].split("");
		n[0] = n[0].toUpperCase();
		arr[i] = n.join("");
	}
	return arr.join(" ");
}

