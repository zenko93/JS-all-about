function sameNumbersInArrays(arr1, arr2) {
    const obj = {};
    const result = [];

    arr1.forEach(item => {
        if (obj[item]) {
            obj[item] = obj[item] + 1;
        } else {
            obj[item] = 1;
        }
    })

    arr2.forEach(item => {
        if (obj[item]) {
            result.push(item);
            obj[item] = obj[item] - 1;
        }
    })

    return result;
}

function sameNumbersInArraysV2(arr1, arr2) {
    let firstFlag = 0;
    let secondFlag = 0;
    const result = [];


    while(arr1.length) {
        if (arr1[firstFlag] === arr2[secondFlag]) {
            result.push(arr1[firstFlag]);
        }

        if (arr1[firstFlag] === arr2[secondFlag] || arr2[secondFlag] === undefined) {
            arr1.shift();
        }

        secondFlag++
    }

    return result;
}

console.log(sameNumbersInArraysV2([2,3,4], [2])) // [2]
console.log(sameNumbersInArraysV2([2,2,4], [2,2])) // [2,2]
console.log(sameNumbersInArraysV2([2,2,2,2], [2,2,3,4,5,6,2])) // [2,2,2]
