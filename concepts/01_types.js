// null, undefined, boolean, number, string, object, symbol, bigint
// console.log(typeof 0);
// console.log(typeof true);
// console.log(typeof 'JavaScript');
// console.log(typeof undefined);
// console.log(typeof {}); //Date, Math
// console.log(typeof Symbol('JS'));
// console.log(typeof null);
// console.log(typeof function () {});
// console.log(typeof NaN);



// Приведение типов
// let language = 'JavaScript';
// if(language) {
//     console.log('The best language is:', language)
// }
// //false values = '', 0, undefined, NaN, false, null
// console.log(Boolean(''));
// console.log(Boolean(' '));
// console.log(Boolean('0'));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(function () {}));



//Строки и числа
// console.log(1 + '2');// string 12
// console.log('' + 1 + 0);// string 10
// console.log('' - 1 + 0);// -1
// console.log('3' * '8');// 24
// console.log(4 + 10 + 'px');// 14px
// console.log('px' + 5 + 10);// px510
// console.log('42' - 40);// 2
// console.log('42px' - 40);// NaN
// console.log(null + 2);// 2
// console.log(undefined + 33);// NaN



// == vs ===
// == сравнивает с приведением типов, а === сравнивает без приведения типов (только по значению)
// console.log(2 == '2'); // true
// console.log(2 === '2'); // false
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log('0' == false) // true (все приводит к числу)
// console.log('0' == 0) // true (все приводит к числу)
// console.log(0 == 0) // true (все приводит к числу)



// ======
// console.log(false == '');
// console.log(false == []);
// console.log(false == {});
// console.log('' == 0);
// console.log('' == []);
// console.log('' == {});
// console.log(0 == []);
// console.log(0 == {});
// console.log(0 == null);
