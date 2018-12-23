function LinearSearch(arr,item){
	min = 0;
	max = arr.length;
	mid = Math.floor(min+max/2);
	if(arr.length < 1) {
		return -1;
	}

	if(arr[arr.length-1]===item){
		return arr.length-1;
	}
	arr.pop();
	return LinearSearch(arr,item);
}

         
