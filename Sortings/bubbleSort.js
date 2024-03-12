function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true

                //without temp variable
                // [arr[i],arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
    } while (swapped);
    return arr;
}

console.log('Bubble Sort');
console.log(bubbleSort([99, 8, 55, 33, 2, 111, 0, 4]));