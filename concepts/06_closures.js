//замыкания

function sayHelloTo(name) {
    const message = 'Hello ' + name;
    return function() {
        console.log(message)
    }

}
const helloToNastya = sayHelloTo('Nastya');
const helloToEva = sayHelloTo('Eva');
helloToNastya();
helloToEva();

function createFrameworkManager() {
    const fw = ['Vue', 'React']

    return {
        print: function () {
            console.log(fw.join(' '))
        },
        add: function (framework) {
            fw.push(framework)
        }
    }
}

// const manager = createFrameworkManager();
// manager.print();
// manager.add('Angular');
// manager.print();


// setTimeout
const fib = [1, 2, 3, 5, 8, 13];

// for (var i = 0; i < fib.length; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log(`fib[${j}] = ${fib[j]}`)
//         }, 1500)
//     })(i)
// }


