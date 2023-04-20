// Let
// let a = 'Variable a';
// let b = 'Variable b';
// {
//     a = 'New Variable A';
//     let b = 'Local Variable B';
//     console.log('Scope A', a);
//     console.log('Scope B', b);
//     // console.log('Scope C', c); // ReferenceError: c is not defined
//     // let c = 'Something'
// }
// console.log('A:', a);
// console.log('B:', b);


// Const
const port = 8080;
// port = 2000; // TypeError: Assignment to constant variable.
const array = ['JavaScript', 'is', 'Awesome'];
array.push('!');
array[0] = 'JS';
console.log(array.join(' '));

const obj = {};
obj.name = 'Jeka';