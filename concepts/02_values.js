// let a = 42;
// let b = a;
// b++;
// console.log('a', a);
// console.log('b', b);


let a = [1, 2, 3];
let b = [...a]; //concat, slice
let c = a;

b.push(4);

console.log('a', a);
console.log('b', b);

console.log(a === b); // false
console.log(a === c); // true