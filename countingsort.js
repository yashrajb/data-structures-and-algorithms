function countingSort(A){
var newA = [];
var NewNewA = [];
var result = [];
	for(var i=0;i<getNumber(A)+1;i++){
		newA[i] = 0;
	}
	for(var i=0;i<A.length;i++){
		newA[A[i]] = newA[A[i]] + 1;
		result[i] = i;
	}
	for(var i=0;i<newA.length;i++){
		NewNewA[i] = 0;
		if(i===0){
			NewNewA[i] = newA[i]; 
		}else {
			NewNewA[i] = NewNewA[i-1]+newA[i];
		}
	}
	for(var i=A.length-1;i>=0;i--){
		NewNewA[A[i]]--;
		result[NewNewA[A[i]]] = A[i];
	}
	return result;
}

function getNumber(arr){
	var max = 0;
	for(var i=0;i<arr.length;i++){
		max = Math.max(max,arr[i]);
	}
	return max;
}