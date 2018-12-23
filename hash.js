function hashTable(capacity){
	this.count = 0;
	this._storage = [];
	this.size = capacity;
}

function simpleHash(key){
	var index = 0;
	for(var i=0;i<key.length;i++){
		index = index + key.charCodeAt(i);
	}
	return index;
}

hashTable.prototype.find = function(key){
	var index = simpleHash(key);
	var keyIndex = undefined;
	var value = undefined;
	if(this._storage[index]){
		this._storage[index].forEach(function(Arrkey,ind){
			if(Arrkey[0]===key){
				keyIndex = ind;
				value = Arrkey[1];
			}
		})
	}
	return {
		key,
		keyIndex,
		index,
		value
	}
}

hashTable.prototype.set = function(key,value){
	var hash = simpleHash(key);
	var match = undefined || this.find(key);

	if(match.keyIndex){
		this._storage[match.index][1] = value;
	}

	if(this._storage[hash]){
		this._storage[hash][(this._storage.length-1)+1] = [];
		this._storage[hash][(this._storage.length-1)+1][0] = key;
		this._storage[hash][(this._storage.length-1)+1][1] = value;
	}else {
		this._storage[hash] = [[key,value]];
	}
	
}

var obj = new hashTable(5);
obj.set("Hello world",true);
obj.set("Hello world",false);
obj.set("Yashraj","Basan");
console.log(obj._storage);