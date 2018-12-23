function BinarySearch(arr,value){
var min = 0;
var max = arr.length-1;
var mid = Math.floor((min+max)/2);
	while(min<=mid){
		if(arr[mid]===value){
			return mid;
		};

		if(arr[mid] > value){
			max = mid-1;
		}

		if(value > arr[mid]){
			min = mid+1;
		}
		mid = Math.floor((min+max)/2);
	}
	return -1;
}
console.log(Recursion([1,2,3,4,5,6,7,8,9],0,8,4)); 
                              


function Recursion(arr,min,max,value){
	var mid = Math.floor((min+max)/2);
	if(arr[mid]===value){
		return mid;
	}

	if(value > arr[max] || value < arr[min]){
		return -1;
	}

	if(arr[mid] > value){
		return Recursion(arr,min,mid-1,value);
	}
	if(value > arr[mid]){
		return Recursion(arr,mid+1,max,value);
	}
		return -1;
}

