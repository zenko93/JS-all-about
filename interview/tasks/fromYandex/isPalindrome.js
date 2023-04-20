
// function isPalindrome(word) {
//     const modifiedWord = word.trim().toLocaleLowerCase();
//
//     return modifiedWord.split('').reverse().join('') === modifiedWord;
// }
//
// console.log(isPalindrome('ana')); //true
// console.log(isPalindrome('Babab')); //true
// console.log(isPalindrome('Baba ana')); //false
// console.log(isPalindrome('dfghs')); //false

function isPalindromeV2(word) {
    const modifiedWord = word.trim().toLocaleLowerCase();
    let left = 0;
    let right = modifiedWord.length - 1;

    while (left < right) {
        if (modifiedWord[left] !== modifiedWord[right]) {
            return false;
        }

        left++
        right--
    }

    return true;
}

console.log(isPalindromeV2('ana')); //true
console.log(isPalindromeV2('Babab')); //true
console.log(isPalindromeV2('Baba ana')); //false
console.log(isPalindromeV2('dfghs')); //false
