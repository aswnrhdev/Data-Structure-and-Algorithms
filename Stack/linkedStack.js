class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedStack {
    constructor() {
        this.top = null
    }

    push(value) {
        const node = new Node(value)
        if (this.top === null) {
            this.top = node
        } else {
            node.next = this.top
            this.top = node
        }
    }

    pop() {
        this.top = this.top.next;
    }

    peek() {
        console.log(this.top.value);
    }

    print() {
        let curr = this.top
        let listValues = ''

        while (curr) {
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
    }
}

const stack = new LinkedStack();

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()

stack.pop()
stack.print()

stack.peek()