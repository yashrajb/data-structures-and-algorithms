function SelectionSort(arr) {
  for(var i=0;i<arr.length;i++){
  var min = i;
  for(var j=i+1;j<arr.length;j++){
    if(arr[min] > arr[j]){
      min = j;
    }
  }
  if(i!==min){
    var temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
}
return arr;
}