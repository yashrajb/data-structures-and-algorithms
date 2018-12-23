function sortString(string){
	var arr = [];
	var str = "";
	for(var i=0;i<string.length;i++){
		arr[i] = string.charCodeAt(i);
	}
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr.length-1;j++){
			if(arr[j] > arr[j+1]){
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	for(var i=0;i<arr.length;i++){
		str += String.fromCharCode(arr[i]);
	}
	return str;
}