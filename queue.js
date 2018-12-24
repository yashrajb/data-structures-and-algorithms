class Queue {

     constructor(){
         this.q = {};
         this.counter = 0;
         this.next = 0;
     }

     enqueue(num){

        this.q[this.counter] = num;
        this.counter++;

    }

    dequeue(){
            delete this.q[this.next];
            this.next++;
            if(!this.q[this.next]){

                this.next = 0;
                
            }
    }


}

class queue{

constructor(){
    this.data = [];
}

enqueue(num){
    this.data.unshift(num);
}

dequeue(){
    this.data.pop();
}

}

var q = new queue();
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
q.dequeue();
console.log(q);