var {queue} = require("./queue");

var qone = new queue();
qone.enqueue("A");
qone.enqueue("B");
var qtwo = new queue();
qtwo.enqueue("C");
qtwo.enqueue("D");

function weave(q1,q2){

    var newQueue = new queue();

    while(qone.data.length && qtwo.data.length){

        newQueue.enqueue(qone.dequeue());
        newQueue.enqueue(qtwo.dequeue());

    }

    return newQueue.data;

}

console.log(weave(qone,qtwo));