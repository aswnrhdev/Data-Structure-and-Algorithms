class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.size = 0
        this.head = null
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }

        let removedValues;

        if(this.size === 1){
            removedValues = this.head.value
            this.head = null;
        }else{
            removedValues = this.head.value
            this.head = this.head.next

        }

        this.size--
        return removedValues;
    }

    print(){
        if(this.isEmpty()){
            console.log('The list is empty!');
        }else{
            let curr = this.head
            let listValues = ''

            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }

            console.log(listValues);
        }
    }
}

const list = new LinkedList();

list.prepend(10)
list.print()

list.prepend(20)
list.print()

console.log(list.removeFromFront());
list.print()