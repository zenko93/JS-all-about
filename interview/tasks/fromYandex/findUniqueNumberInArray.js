
function findUniqueNumberInArray1(arr) {
    const sortedArr = arr.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length; i = i+2) {
        if (sortedArr[i] !== sortedArr[i + 1]) {
            return sortedArr[i];
        }
    }
}

function findUniqueNumberInArray2(arr) {
    const dictionary = {};

    arr.forEach(num => {
        if (dictionary[num]) {
            delete dictionary[num];
        } else {
            dictionary[num] = 1
        }
    })

    return Object.keys(dictionary)[0]
}

function findUniqueNumberInArray(arr) {
    return arr.reduce((acc, curr) => acc ^ curr)
}

console.log(findUniqueNumberInArray([1,1,2,2,3]))
console.log(findUniqueNumberInArray([1,1,2,2,3,3,0]))
console.log(findUniqueNumberInArray([1,2,1,3,3,2,4]))





