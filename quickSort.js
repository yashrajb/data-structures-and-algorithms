function quicksort(arr,left,right){
	var pivot;
	if(left < right){
		pivot = right;
		var mid = partition(arr,pivot,left,right); 
		quicksort(arr,left,mid-1); 
		quicksort(arr,mid+1,right);
	}
	return arr;
}

function partition(arr,pivot,left,right){
	var pivotValue = arr[pivot];//4
	var partitionIndex = left; //0
	for(var i=left;i<right;i++){ 
		if(arr[i] <= pivotValue){
			swap(arr,i,partitionIndex);
			partitionIndex++;
		}
	}
	swap(arr,partitionIndex,right);
	return partitionIndex;
}

function swap(arr,i,j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

console.log(quicksort([5,4,3,2,1],0,4));