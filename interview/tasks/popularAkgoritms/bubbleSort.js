const array = [2,3,8,1,5,7,4,6,10,9];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
}

bubbleSort(array);
console.log(array); // [1,2,3,4,5,6,7,8,9,10]
