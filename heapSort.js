class Heap {
    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return i * 2 + 1;
    }

    getRightChildIndex(i) {
        return i * 2 + 2;
    }

    swap(i1, i2) {
        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    //MAX HEAP

    // push(key){
    //     this.data[this.data.length] = key;
    //     this.heapifyUp();
    // }

    // heapifyUp(){
    //     let currentIndex = this.data.length - 1;
    //     while(this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]){
    //         this.swap(currentIndex, this.getParentIndex(currentIndex));

    //         currentIndex = this.getParentIndex(currentIndex);
    //     }
    // }

    // pop(){
    //     const maxValue = this.data[0];
    //     this.data[0] = this.data[this.data.length - 1];
    //     this.data.length--;
    //     this.heapifyDown();
    //     return maxValue;
    // }

    // heapifyDown(){
    //     let currentIndex = 0;
    //     while(this.data[this.getLeftChildIndex(currentIndex)] !== undefined){
    //         let biggestChildIndex = this.getLeftChildIndex(currentIndex);

    //         if(this.data[this.getRightChildIndex(currentIndex)] !== undefined && this.data[this.getRightChildIndex(currentIndex)] > this.data[this.getLeftChildIndex(currentIndex)]){
    //             biggestChildIndex = this.getRightChildIndex(currentIndex);
    //         }

    //         if(this.data[currentIndex] < this.data[biggestChildIndex]){
    //             this.swap(currentIndex, biggestChildIndex);
    //             currentIndex = biggestChildIndex;
    //         }else{
    //             return;
    //         }
    //     }
    // }

    //MIN HEAP

    push(key) {
        this.data[this.data.length] = key;
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.data.length - 1;
        while (this.data[currentIndex] < this.data[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));

            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    pop() {
        const minValue = this.data[0]
        this.data[0] = this.data[this.data.length - 1];
        this.data.length--;
        this.heapifyDown();
        return minValue;
    }

    heapifyDown() {
        let currentIndex = 0;
        while (this.getLeftChildIndex(currentIndex) < this.data.length) {
            let smallestIndex = this.getLeftChildIndex(currentIndex);

            if (this.getRightChildIndex(currentIndex) < this.data.length && this.data[this.getRightChildIndex(currentIndex)] < this.data[this.getLeftChildIndex(currentIndex)]) {
                smallestIndex = this.getRightChildIndex(currentIndex);
            }

            if (this.data[currentIndex] > this.data[smallestIndex]) {
                this.swap(currentIndex, smallestIndex);
                currentIndex = smallestIndex;
            } else {
                return;
            }
        }
    }
}

const heap = new Heap();

// console.log(heap.data);

heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);

console.log(heap.data.join(','));

let arr = []

arr.push(heap.pop());
arr.push(heap.pop());
arr.push(heap.pop());
arr.push(heap.pop());
arr.push(heap.pop());
arr.push(heap.pop());

console.log(arr.join(','));
