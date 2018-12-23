function printingSteps(num){
	var i = 0;
	var j;
	var string;
	while(i<num){
		string = "* ";
		for(var j=0;j<i;j++){
			string += "* ";
		}
		console.log(string);
		i++;
	}
}

function pyramid(num){
	var i = 0;
	var j;
	var string;
	for(var i=0;i<=num;i++){ //i = 1 i<=3->true
		string = ""; 
		for(var k=0;k<=(num-i);k++){ //k=0;k<=2
			string += " ";
		}
		for(j=0;j<i;j++){ //j < 1
			string += "* ";
		}
		console.log(string);
	}
}
pyramid(3);