
function findMaxElement(arr) {
    let max = -Infinity;

    arr.forEach(item => {
        if (item > max) {
            max = item;
        }
    })

    return max;
}

console.log(findMaxElement([3,56,-1,-800,9]))

/////////////
console.log(Math.max(...[3, 56, -1, -800, 9]));
