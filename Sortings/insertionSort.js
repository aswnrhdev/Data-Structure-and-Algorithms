function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }

        arr[j + 1] = numberToInsert
    }

    return arr;
}

console.log('Insertion Sort');
console.log(insertionSort([10, 49, 2, 1, 7, 99, 24]));