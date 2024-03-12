function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]]
    }
    return arr;
}

console.log('Selection Sort');
console.log(selectionSort([9, 8, 7, 65, 5, 4, 3, 2]));