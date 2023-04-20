
// const num = '2';
// if(isFinite('2d')) {
//     console.log('yes')
// }else {
//     console.log('no')
// }


// function objectify (key, value) {
//     console.log({ [key]: value })
// }
//
// objectify('name', 'Tyler') // { name: 'Tyler' }
//
// let obj = {};
// let obj1 = Object();
// let obj2 = Object.create({});
// let obj3 = new Object();
// let obj4 = Object.assign({});
//
// console.log(obj, obj1, obj2, obj3, obj4)

// "use strict"
// function f() {
//     console.log(this)
// }
// f()
//
// let person = {
//     age: 12,
//     addLeg: function() {
//         console.log(this.age)
//     }
// };
//
// let per = Object.create(person);
//
// per.addLeg.bind(person)()

// const array1 = [1, 2, 3, 4];
// const reducer = (previous, current) => previous + current;
// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));


// console.log(Array.from([1, 2, 3], x => x + x));
// // expected output: Array [2, 4, 6]
//
// Array.of(1);         // [1]
// Array.of(1, 2, 3);   // [1, 2, 3]
// Array.of(undefined); // [undefined]

//
// function Family(name) {
//     this.name = name;
//     this.smile = function () {
//         console.log(this.name + ' smile')
//     }
// }
// function Child(name) {
//     Family.call(this, name)
//     console.log(this)
// }
// let person = new Child('Eva');
// person.smile()


// function Base(name) {
//     const obj = {};
//     obj.func = function() {};
//     obj.name = name;
//     return obj;
// }
// function Child(name, secondName) {
//     const obj = Base(name);
//     obj.secondName = secondName;
//     return obj;
// }
// Child('Eva','Sychshenko')

// function Family(name) {
//     this.name = name;
//     this.smile = function () {
//         console.log(this.name + ' smile')
//     }
// }
// Family.prototype.greet = function () {
//     console.log('Hi ' + this.name + ' ' + (this.surname || ''))
// };
// Child.prototype = Family.prototype;
// function Child(name, surname) {
//     this.name = name;
//     this.surname = surname;
// }
//
// let child = new Family('Eva')
// child.greet()
// child.smile()
// let child1 = new Child('Eva', 'Sychshenko');
// child1.greet()


// var obj = {
//     innerObj: { foo: 9 }
// };
// var z = obj.innerObj;
// z.x = 25;
// console.log(obj.innerObj.x); //25

// (function () {
//     var a = b = v = 2;
//     c = 1;
// })();
//
// console.log(a); //a is not defined
// console.log(b); //2
// console.log(c); //1
// console.log(v); //2

// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};
//
// console.log(bar) // { n: 1, x: { n: 2 } }
// console.log(foo) // { n: 2 }

// let sum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
// let add = (a) => (b) => () => a + b;

// const add = (a) => {
//     let sum = a;
//     const func = (b) => {
//         if (b) {
//             sum += b;
//             return func;
//         } else {
//             return sum;
//         }
//     };
//     return func;
// };

// const add = (a) => {
//     let sum = a;
//     const func = (b) => {
//         sum += b;
//         return func;
//     };
//     func.valueOf = () => sum;
//     return func;
// };
// console.log(add(2)(3)); // 5;
// console.log(add(1)(2)());

// var a={},
//     b={key:'b'},
//     c={key:'c'};
//
// a[b]=123;
// a[c]=456;
//
// console.log(a[b]); // 456 a['object Object']

// function isThreePassed(...arr){
//     console.log(arr.includes(3));
// }
// isThreePassed(1,2) //false
// isThreePassed(9,3,4,9) //true
//
// function isThreePassed(){
//     const args = Array.prototype.slice.call(arguments);
//     return args.indexOf(3) != -1;
// }
// isThreePassed(1,2) //false
// isThreePassed(9,3,4,9) //true

// [1, [1, 2, [3, 4]], [2, 4]] -> [1, 1, 2, 3, 4, 2, 4]
// let arr = [1, [1, 2, [3, 4]], [2, 4]];
// const sortArr = (arr) => arr.reduce((acc, cur) =>
//     acc.concat(Array.isArray(cur) ? sortArr(cur) : cur), []);
// console.log(sortArr(arr));

// function a (num) {
//     let count = num
//     return function() {
//         return count = count + 1
//     }
// }
//
// let counter1 = a(3)
// console.log(counter1())
// console.log(counter1())
//
// let counter2 = a(5)
// console.log(counter2())
// console.log(counter2())

// function foo() {
//     var x
//     function x() { }
//     x = 1; // если раскомментировать - number
//     return typeof x; // undefined
// };
// console.log(typeof foo()); // string
// console.log(typeof Number) // function


// let a = {
//     b: () => console.log('yo',this)
// }
// const makeIterator = (arr) => {
//     let index = 0;
//     return {
//         goNext: function () {
//             if(index < arr.length) {
//                 return arr[index++]
//             } else {
//                 return 'complete'
//             }
//         }
//     }
// };
//
// let iterator = makeIterator([1, 2, 3]);
//
// iterator.goNext(); // 1
// iterator.goNext(); // 2
// iterator.goNext(); // 3
// iterator.goNext(); // 'complete'
// iterator.goNext(); // 'complete'

// console.log(1 + '1' - '1') // 10
// console.log(1 > 2 > 3 ) // false
// console.log(3 < 2 < 1 > 1 < 1) // true
// console.log(1 > 1 < 1) // true
// //потому что проверки идут слева-направо

// function textAfterFifeSec(text, callback) {
//     return(callback(text))
// }
//
// function callBack(text) {
//     setTimeout(() => {
//         console.log(text)
//     }, 5000)
// }
//
// const text = 'Hello my name is Evgeniy';
// textAfterFifeSec(text, callBack);

// function sum(a, b) { return a + b;}
// function devide(a, b) { return a / b; }
//
// function getNumber(a, b, callback) {
//     console.log(callback(a, b));
// }
//
// getNumber(1, 5, sum)
// getNumber(1, 5, devide)

// const tweeps = [
//     { name: 'Peter', age: 20 },
//     { name: 'Mary', age: 32 },
// ];
//
// // написать функцию prop
// function prop(string) {
//     return (item) => {
//         return item[string]
//     }
// }
//
// console.log(tweeps.map(prop('age')))
// // 'Mentioned by Peter, Mary'
// const namesStr = `Mentioned by ${tweeps.map(prop('name')).join(', ')}`;
//
// // 'They are 20, 32'
// const agesStr = `They are ${tweeps.map(prop('age')).join(', ')}`

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function(i) {
//         return function() {
//             console.log('The index of this number is: ' + i);
//         }
//     }(i), 3000);
// }


// let a = { b: 1 },
//     c = a;
//
// console.log(c.b); //?
// delete c.b;
// console.log(c.b); //?
// delete a.b;
// console.log(c.b); //?

///////////////////////////////////////// Unique items in array
// const arr = ['a','a','b','b','c','c'];
// function unique(arr) {
//     return [...new Set(arr)];
// }
// console.log(unique(arr));
//
// function unique2(arr) {
//     const result = [];
//     arr.forEach(item => !result.includes(item) ? result.push(item) : null);
//     return result;
// }
// console.log(unique2(arr));

///////////////////// Count the same items in array
// const arr2 = ['a','a','b','b','c','c'];
//
// function countItems2(arr2) {
//     const result = {};
//
//     arr2.forEach(item => {
//         result[item] = result[item] + 1 || 1;
//     })
//
//     return result;
// }
// console.log(countItems2(arr2));
//
// function countItems(arr2) {
//     return arr2.reduce((acc, item) => {
//         if (acc[item]) {
//             acc[item] = acc[item] + 1;
//         } else {
//             acc[item] = 1;
//         }
//         return acc;
//     }, {})
// }
// console.log(countItems(arr2));
//

///////////////////////////////////////// Object Values
// const obj = { a: 2, b: 3, c: 5 };

// function objValues(obj) {
//     return Object.values(obj).toString();
// }
// console.log(objValues(obj))

// function valuesPolyfill (object) {
//     return Object.keys(object).map(key => object[key]);
// };
// console.log(valuesPolyfill(obj))

////////////////////////////////// Calculate sum and mul
// function sum(a, b) {
//     return a + b;
// }
//
// function mul(a, b) {
//     return a * b;
// }

// let calc = (cb) => (a) => (b) => cb(a, b)

// function calc(cb) {
//     return function (a) {
//         return function (b) {
//             return cb(a, b);
//         }
//     }
// }

// function calc(cb) {
//     return function (a) {
//         let arg = [a];
//
//         return function nextArg(b) {
//             if (b) {
//                 arg.push(b);
//                 return nextArg();
//             }
//             else {
//                 return cb(...arg);
//             }
//         }
//     }
// }
// console.log(calc(sum)(1)(5));
// console.log(calc(mul)(1)(3));

// console.log(sum())
// console.log(undefined + undefined) // NaN


/////////////////////////////////////////////// Reverse
// function reverse(...arg) {
//     return arg.reverse().join('')
// }
// console.log(reverse(1, 2, 3));

// function reverse() {
//     let result = '';
//
//     for (let i = arguments.length - 1; i >= 0; i--) {
//         result += arguments[i];
//     }
//
//     return result;
// }
// console.log(reverse(1, 2, 3));
