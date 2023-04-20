function duplicateEncode(word){
    let result = '';
    let tempArr = [...word.toLowerCase()]
    let secondArr = [];

    while(tempArr.length > 0) {
        let tempLetter = tempArr.shift();

        if (tempArr.includes(tempLetter) || secondArr.includes(tempLetter)) {
            result += ')';
        } else {
            result += '(';
        }

        secondArr.push(tempLetter);
    }

    return result;
}

function duplicateEncode2(word){
    return word
        .toLowerCase()
        .split('')
        .map((item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item) ? '(' : ')')
        .join('')
}


console.log(duplicateEncode('Success')); // )())())
console.log(duplicateEncode2('Success')); // )())())
