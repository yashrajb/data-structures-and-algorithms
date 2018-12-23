function VowelsInString(string){
	string = string.split("").join().toLowerCase();
	var length = 0;
	for(var i=0;i<string.length;i++){
		if(string[i]==="a" || string[i]==="e" || string[i]==="i" || string[i]==="o" || string[i]==="u"){
			length++;
		}
	}
	return length;
}

var str = "Hello world";
str = str.split(" ").join("").toLowerCase();
console.log(str);