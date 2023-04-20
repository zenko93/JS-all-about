let str = '((()))()';

function checkBalance(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            count++;
        } else {
            count--
        }
    }

    return count === 0;
}

console.log(checkBalance(str))
