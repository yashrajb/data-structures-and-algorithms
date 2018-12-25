var {Stack} = require("./stack");

class Queue {
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    add(num){

    this.s1.push(num);

    }

    remove(){


        while(this.s1.count){

            this.s2.push(this.s1.pop());

        }

        var temp = this.s2.pop();

        while(this.s2.count){

            this.s1.push(this.s2.pop());

        }
        return temp;

    }

    peek(){
        return this.s1.peek();
    }
}

var q = new Queue()
q.add(1);
q.add(2);
q.add(3);
console.log(q.remove());
console.log(q.peek());
