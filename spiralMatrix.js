function spiralMatrix(num){
    var result = [];
    var startRow = 0,endRow=num-1;
    var startColumn = 0,endColumn = num-1;
    var counter = 1;
    var p = 0;
    for(var i=0;i<num;i++){
        result.push([]);
    }
    while(startRow<=endRow && startColumn <= endColumn){
        for(i=startColumn;i<=endColumn;i++){
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
     for(var i=startRow;i<=endRow;i++){
        result[i][endColumn] = counter;
        counter++;
     }
     endColumn--;
     for(var k=endColumn;k>=startColumn;k--){
         result[endRow][k] = counter;
         counter++;
     }
     endRow--;
 
        for(var l=endRow;l>=startRow;l--){
            result[l][startColumn] = counter;
            counter++;
        } 
        startColumn++;    
   }

    return result;
}

console.log(spiralMatrix(5));