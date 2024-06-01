class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow!";
        }
        return this.items.pop();
    }

    enQueue(value) {
        this.items.push(value)
        this.size++
    }

    deQueue() {
        let removedValues = this.items.shift()
        this.size--
        return removedValues
    }

    peek() {
        return this.items[0];
    }

    print() {
        console.log(this.items);
    }
}

const stack = new Stack();

const inputString = 'Aswin';
const rev = inputString.split('');

for (let i = 0; i < rev.length; i++) {
    stack.push(rev[i])
}

let reversedString = ''

while (!stack.isEmpty()) {
    reversedString += stack.pop()
}

console.log("Original string:", inputString);
console.log("Reversed string:", reversedString);


stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()

stack.pop()
console.log(stack.peek());
stack.print()

console.log('Stack after queue');

stack.enQueue(50)
stack.enQueue(60)
stack.print()

stack.pop()
stack.print()