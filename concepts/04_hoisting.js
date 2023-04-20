// console.log(sum(1, 41));
//
// function sum(a, b) {
//     return a + b;
// }


// var i;
// console.log(i);// undefined
// i = 42;
// console.log(i);// 42


// let & const не подверженны hoisting
// console.log(num); // ReferenceError: num is not defined
// const num = 42;
// console.log(num); // 42


// Function Expression & Function Declaration

//Function Declaration
console.log(square(25))
// function square(num) {
//     return num ** 2
// }
//Function Expression
const square = function(num) {
    return num ** 2
}; // ReferenceError: square is not defined