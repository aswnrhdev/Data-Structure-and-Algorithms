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

    //normal method
    // push(value) {
    //     this.items[this.size] = value;
    //     this.size++;
    // }

    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow!";
        }
        return this.items.pop();
    }

    // normal method
    // pop() {
    //     let removedItem = this.items[this.size - 1]
    //     for (let i = this.size - 1; i > 0; i--) {
    //         this.items[i] = this.items[i - 1]
    //     }
    //     this.items.length = this.size - 1
    //     this.size -= 1;
    //     return removedItem;
    // }

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
