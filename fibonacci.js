function fibo(num){

var zero = 0,one=1,result;
var resultArr = [0,1];
for(var i=0;i<=num;i++){
    result = zero+one;
    zero = one;
    one = result;
    resultArr.push(result);
}
return resultArr;
}

function recurseFibo(num,zero=0,one=1,i=0,arr=[0,1]){
    if(i===num){
        return arr;
    }
    var result = zero + one;
    arr.push(result);
    i++;
    return recurseFibo(num,one,result,i,arr);
}

function recurse2fib(num){

    if(num < 2){
        return num;
    }

    return recurse2fib(num - 1) + recurse2fib(num - 2);

}

function recurseMemofib(num,memo=[0,1]){

    if(num < 2){
        return num;
    }

    if(memo[num]){
        return memo[num];
    }
    
    memo[num] = recurseMemofib(num-1,memo) + recurseMemofib(num-2,memo);
    return memo[num];

}
console.log(recurseMemofib(10));