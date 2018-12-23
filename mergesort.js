function mergeSort(arr){
	if(arr.length < 2) 
	{
		return arr;
	}
	var mid = Math.floor(arr.length/2);
	var lsort = mergeSort(arr.slice(0,mid));
	var rsort = mergeSort(arr.slice(mid));
	return merge(lsort,rsort);
}

function merge(lsort,rsort){
	var results = [];
	var lptr = 0;
	var rptr = 0;
	while(lptr < lsort.length && rptr < rsort.length){
		if(lsort[lptr] > rsort[rptr]){
			results.push(rsort[rptr]);
			rptr++;
		}else {
			results.push(lsort[lptr]);
			lptr++;
		}
	}
	return [...results,...lsort.slice(lptr),...rsort.slice(rptr)];
}