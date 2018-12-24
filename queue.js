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

    peek(){
        return this.q[this.counter-1];
    }


}

class queue{

constructor(){
    this.data = [];
}

enqueue(num){
   return this.data.unshift(num);
}

dequeue(){
    return this.data.pop();
}

peek(){

     return this.data[this.data.length - 1];

}

}

module.exports = {
    queue,
    Queue
}
