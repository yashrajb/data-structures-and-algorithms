function get(number,num){
	var arr = number.toString();
	if(num >= arr.length) {
		return 0;
	}						3
	return parseInt(arr[arr.length - num - 1]);
}

function digitCount(number){
	return parseInt(number.toString().length);
}

function maxNumber(array){
var max;
var k=0;
for(var i=0;i<array.length;i++){
	max = Math.max(k,digitCount(array[i]));
	k = max;
}
return max;
}
 
function RadixSort(arr){
	var newArray = [];
	var max = maxNumber(arr);
	for(var i=0;i<max;i++){
		var array = [[],[],[],[],[],[],[],[],[]];
		for(var j=0;j<arr.length;j++){
			var num = get(arr[j],i);
			array[num].push(arr[j]);
		}
		arr = [].concat(...array);
	}
return arr;
}

[1234,5678,3456,89,9]