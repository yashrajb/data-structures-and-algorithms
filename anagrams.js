var stringA = "rail safety";
var stringB = "fairy tales";

function Anargram(stringA,stringB){
	stringA = stringA.split(" ").join("").toLowerCase();
	stringB = stringB.split(" ").join("").toLowerCase();
	var obj1 = {};
	var obj2 = {};
	for(var i=0;i<stringA.length;i++){
		if(obj1[stringA[i]]){
			obj1[stringA[i]]++;
		}else{
			obj1[stringA[i]] = 1; 
		}
	}
	for(var i=0;i<stringB.length;i++){
		if(obj2[stringB[i]]){
			obj2[stringB[i]]++;
		}else{
			obj2[stringB[i]] = 1; 
		}
	}
	for(value in obj1){
		if(obj1[value]!==obj2[value]){
			return false;
		}
	}
	for(value in obj2){
		if(obj2[value]!==obj1[value]){
			return false;
		}
	}
	return true;
}

console.log(Anargram(stringA,stringB));


