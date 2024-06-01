class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    isEmpty() {
        return this.items.length === 0
    }

    // enQueue(value) {
    //     this.items[this.rear] = value;
    //     this.rear++;
    // }

    enQueue(value) {
        this.items.push(value)
    }

    // deQueue() {
    //     if (this.isEmpty()) {
    //         return "Queue Underflow!"
    //     }

    //     for (let i = 0; i < this.items.length - 1; i++) {
    //         this.items[i] = this.items[i + 1]

    //     }
    //     this.items.length = this.items.length - 1

    // }

    deQueue(value) {
        if (this.isEmpty()) {
            return "Queue Underflow"
        }

        this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty!"
        }

        return this.items[0]
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();

console.log(queue.deQueue());

queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.enQueue(40)
queue.print()

queue.deQueue()
queue.print()
