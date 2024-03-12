class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enQueue(value) {
        const node = new Node(value);

        if (this.front === null) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    deQueue() {
        let removedvalue = this.front.value;
        this.front = this.front.next;

        return removedvalue;
    }

    print() {
        let curr = this.front;
        let listValues = "";

        while (curr) {
            listValues += `${curr.value} `;
            curr = curr.next;
        }
        console.log(listValues);
    }
}

const list = new Queue();

list.enQueue(10);

list.enQueue(20);
list.enQueue(30);
list.print();

console.log(list.deQueue());
list.print();
