function InsertionSort(arr){  
for(var i=0;i<arr.length;i++){
  var sortedIndex = i;
  for(var j=i;j>=0;j--){
    if(arr[j] > arr[sortedIndex]){
      var temp = arr[sortedIndex];
      arr[sortedIndex] = arr[j];
      arr[j] = temp;
      sortedIndex = j;
    }
  }
}
return arr;
}