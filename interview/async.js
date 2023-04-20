// function promise(item) {
//     return new Promise((resolve, reject) => {
//         if (item === 1) {
//             console.log("promise error", item);
//
//             reject(); // warning
//         }
//
//         setTimeout(() => {
//             console.log("promise success", item);
//
//             resolve();
//         }, (10 - item) * 10);
//     });
// }
//
// async function promises() {
//     try {
//         await Promise.all([0, 1, 2].map(promise));
//     } catch (e) {
//         console.log("global error");
//     }
// }
//
// promises();
//
// promise error 1
// global error
// promise success 2
// promise success 1
// promise success 0


// ---------------------------------------
// var a = 1
// var fn = function() {
//     setTimeout(function timeout() {
//         console.log(`a ${a}`);
//         a = 2;
//     }, 0);
//
//     var p = new Promise(function(resolve, reject) {
//         console.log(`b ${a}`);
//         a = 3;
//         resolve();
//     })
//
//     p.then(function() {
//         console.log(`c ${a}`);
//         a = 4;
//     }).catch(function() {
//         console.log(`d ${a}`);
//         a = 5;
//     }).then(function() {
//         console.log(`e ${a}`);
//         a = 6;
//     })
//
//     console.log(`f ${a}`);
// }
//
// fn();
// // b 1 | f 3 | c 3 | e 4 | a 6




// --------------------------------------------
// Promise.resolve(10)
//     .then(e => console.log(e)) // ??
//     .then(e => Promise.resolve(e))
//     .then(console.log) // ??
//     .then(e => {
//         if (!e) {
//             throw 'Error caught';
//         }
//     })
//     .catch(e => {
//         console.log(e); // ??
//         return new Error('New error');
//     })
//     .then(e => {
//         console.log(e.message); // ??
//     })
//     .catch(e => {
//         console.log(e.message); // ??
//     });
// 10, undefined, Error caught, New error




// ----------------------------------------------
// Promise.reject('a')
//     .catch(p => p + 'b')
//     .catch(p => p + 'c')
//     .then(p => p + 'd')
//     .finally(p => p + 'e')
//     .then(p => console.log(p));
// console.log('f');
// //f
// //abd



// ----------------------------------------------
// console.log(1);
// setTimeout(() => console.log(2), 1000);
// setTimeout(() => console.log(3));
// Promise.resolve(true).then(() => console.log(4));
// console.log(5);
// 1 5 4 3 2
