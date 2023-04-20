function binarySearch(arr, search) {
    let left = arr[0];
    let right = arr[arr.length - 1];
    let middle = Math.floor((right - left) / 2)

    if (search > right || search < left) {
        return false;
    }

    while (middle !== search) {
        if (middle > search) {
            right = middle;
            middle = Math.floor((right + left) / 2)
        }

        if (middle < search) {
            left = middle + 1;
            middle = Math.floor((right + left) / 2);
        }
    }

    return true;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 1)) // true
console.log(binarySearch([2,3,4,5,6,7,8,9], 9)) // true
