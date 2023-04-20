const add = a => b => a + b;
const mul = a => b => a * b;

const compose = (...arr) => {
    return function(c) {
        return arr.reduceRight((acc, func) => func(acc), c);
    }
}

const composed = compose(mul(2), add(5), add(2));

console.log(composed(3)); // 20
console.log([1, 2, 6].map(composed)); // [16, 18, 26]
