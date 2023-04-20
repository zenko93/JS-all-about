function numberInARow(arr) {
    let result = 0;
    let current = 0;

    arr.forEach(num => {
        if (num > 0) {
            current++;
            result = Math.max(result, current);
        } else {
            current = 0;
        }
    })

    return result;
}

console.log(numberInARow([1,1,1,0,1,1])); // 3
console.log(numberInARow([0,0,0,0,0])); // 0
console.log(numberInARow([1,1,1,1,1,1])); // 6
console.log(numberInARow([1,0,1,0,1,0])); // 1
console.log(numberInARow([])); // 0
